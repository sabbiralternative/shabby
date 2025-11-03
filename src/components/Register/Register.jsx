import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Notification from "../Notification/Notification";
import UseState from "../../hooks/UseState";
import { API, settings } from "../../utils";
import useGetSocialLink from "../../hooks/useGetSocialLink";
import { AxiosSecure } from "../../lib/AxiosSecure";
// import getOtpOnWhatsapp from "../../utils/getOtpOnWhatsapp";
const Register = () => {
  const token = localStorage.getItem("token");
  const referralCode = localStorage.getItem("referralCode");
  const { refetchSocialLinks } = useGetSocialLink();
  // const [userExist, setUserExist] = useState(false);

  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
    mobileNo: "",
    otp: "",
    referralCode: "",
  });
  const { setSuccessRegister, logo } = UseState();
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [errRegister, setErrRegister] = useState("");
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [errOtp, setErrOtp] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  // const [userName, setUserName] = useState("");
  const [otpField, setOtpField] = useState("");
  const [order, setOrder] = useState({
    orderId: "",
    otpMethod: "",
  });

  /* set site title  */
  useEffect(() => {
    document.title = settings.siteTitle;
  }, []);

  /* get whats app link from api */
  const { data: whatsAppLink } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      const res = await AxiosSecure.post(API.whatsapp);
      const data = res.data;

      if (data?.success) {
        return data?.result;
      }
    },
  });

  /* handle user exist or not */
  // const isUserExist = async (e) => {
  //   if (e.target.value.length > 3) {
  //     setUser({ ...user, userName: e.target.value });
  //     /* random token */
  //     const generatedToken = UseTokenGenerator();
  //     /* encrypted post data */
  //     const encryptedVideoData = UseEncryptData({
  //       username: e.target.value,
  //       token: generatedToken,
  //     });
  //     const res = await axios.post(API.checkUsername, encryptedVideoData);
  //     const data = res.data;
  //     if (data?.success) {
  //       setUserErr(false);
  //       setUserExist(true);
  //     } else if (!data?.success) {
  //       setUserErr(true);
  //       setUserExist(false);
  //     }
  //   }
  // };

  /* Handle register */
  const onSubmit = async () => {
    setConfirmPasswordErr("");
    setPassword("");
    setMobile("");
    // setUserName("");
    setOtpField("");
    // if (user?.userName === "") {
    //   return setUserName("User name is required !");
    // }
    if (
      user?.password !== user?.confirmPassword &&
      user?.confirmPassword?.length > 0
    ) {
      return setConfirmPasswordErr("Password did not match !");
    } else if (user?.password === "") {
      return setPassword("Password is required !");
    } else if (user?.confirmPassword === "") {
      return setConfirmPasswordErr("Confirm password is required !");
    } else if (user?.mobileNo === "") {
      setMobile("Mobile no is required !");
    } else if (user?.mobileNo?.length > 10 || user?.mobileNo?.length < 10) {
      return setMobile("Enter ten digit mobile no !");
    } else if (user?.otp === "") {
      return setOtpField("OTP is required");
    } else if (user?.otp?.length > 4 || user?.otp?.length < 4) {
      return setOtpField("Enter four digit OTP no");
    } else {
      const registerData = {
        password: user?.password,
        confirmPassword: user?.confirmPassword,
        mobile: user?.mobileNo,
        otp: user?.otp,
        referralCode: referralCode || user.referralCode,
        orderId: order.orderId,
        otpMethod: order.otpMethod,
      };

      const { data } = await AxiosSecure.post(API.register, registerData);
      if (data?.success) {
        if (window?.fbq) {
          window.fbq("track", "CompleteRegistration", {
            content_name: "User Signup",
            status: "success",
          });
        }
        refetchSocialLinks();
        /* Set token to localeStorage */
        localStorage.setItem("token", data.result.token);
        /* Set login name to locale storage */
        localStorage.setItem("loginName", data.result.loginName);
        const buttonValue = JSON.stringify(data.result.buttonValue.game);
        /* set button value to locale storage */
        localStorage.setItem("buttonValue", buttonValue);
        const modal = [
          { banner: data?.result?.banner },
          { bannerTitle: data?.result?.bannerTitle },
        ];
        /* set modal picture to locale storage for the open modal in home page */
        if (data?.result?.banner) {
          localStorage.setItem("modal", JSON.stringify(modal));
        }
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName") &&
          data?.result?.changePassword === true
        ) {
          /* if token, login name, and result.password === true then navigation change-password-login page */
          navigate("/change-password-login");
        } else if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName") &&
          data?.result?.changePassword === false
        ) {
          if (localStorage.getItem("forceLogin")) {
            localStorage.removeItem("forceLogin");
            localStorage.setItem("forceLoginSuccess", "true");
            /* if token, login name, and result.password === false then navigation home page */
            setSuccessRegister("User created successfully");

            navigate("/");
          } else {
            localStorage.setItem("forceLoginSuccess", "true");
            setSuccessRegister("User created successfully");
            navigate("/");
          }
        }
      } else if (!data?.success) {
        setErrRegister(data?.error?.description);
      }
    }
  };

  /* Get whats app api */
  const getOtp = async () => {
    const otpData = {
      mobile: user?.mobileNo,
    };
    const res = await AxiosSecure.post(API.otp, otpData);
    const data = res.data;
    if (data?.success) {
      setOrder({
        orderId: data?.result?.orderId,
        otpMethod: "sms",
      });
      setOtp(data?.result?.message);
    } else {
      setErrOtp(data?.error?.description);
    }
  };

  // const handleGetOtpOnWhatsapp = async () => {
  //   await getOtpOnWhatsapp(user.mobileNo, setOrder, setOtp);
  // };
  return (
    <div className="wrapper">
      {errOtp && (
        <Notification message={errOtp} setMessage={setErrOtp} success={false} />
      )}
      {errRegister && (
        <Notification
          message={errRegister}
          setMessage={setErrRegister}
          success={false}
        />
      )}
      {otp && <Notification message={otp} setMessage={setOtp} success={true} />}
      <div className="login-page">
        <div className="login-box">
          <div className="logo-login">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="login-form mt-4">
            <h4 className="text-center login-title">
              Register <i className="fas fa-hand-point-down"></i>
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <!-- whatsapp start--> */}
              {!token &&
                whatsAppLink?.whatsapplink &&
                settings?.registrationWhatsapp && (
                  <div className="whatsapp-box">
                    <div>
                      <span>Register as New User</span>
                      <h4>Get your instant ID from whatsapp</h4>
                    </div>
                    <Link
                      onClick={() =>
                        window.open(whatsAppLink?.whatsapplink, "_blank")
                      }
                      className="create-whatsapp-link"
                    >
                      <div className="whatsapp-icon">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      <div className="click-here">click here</div>
                    </Link>
                  </div>
                )}
              {/* <!-- whatsapp end--> */}

              <div className="mb-4 input-group position-relative username-text">
                <input
                  name="mobileNo"
                  type="number"
                  className="form-control PhoneInput"
                  placeholder="Mobile No."
                  onChange={(e) =>
                    setUser({ ...user, mobileNo: e.target.value })
                  }
                />
                <span className="input-group-text">
                  <i className="fas fa-phone"></i>
                </span>
                {/* {settings.otpWhatsapp && (
                  <button
                    style={{ marginBottom: "2px" }}
                    disabled={user.mobileNo.length < 10}
                    onClick={handleGetOtpOnWhatsapp}
                    className="btn btn-primary btn-block"
                    type="button"
                  >
                    Get OTP Whatsapp
                  </button>
                )} */}

                <button
                  onClick={getOtp}
                  className="btn btn-primary btn-block"
                  type="button"
                >
                  Get OTP Message
                </button>
                {mobile && (
                  <p className="success-form text-danger">{mobile} </p>
                )}
              </div>

              <div className="mb-4 input-group position-relative username-text">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                    setConfirmPasswordErr("");
                  }}
                />
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
                {password && (
                  <p className="success-form text-danger">{password} </p>
                )}
              </div>
              <div className="mb-4 input-group position-relative username-text">
                <input
                  name="passwordConfirm"
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setUser({ ...user, confirmPassword: e.target.value });
                    setConfirmPasswordErr("");
                  }}
                />
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
                {confirmPasswordErr && (
                  <p className="success-form text-danger">
                    {confirmPasswordErr}
                  </p>
                )}
              </div>

              <div className="mb-4 input-group position-relative username-text">
                <input
                  onChange={(e) => setUser({ ...user, otp: e.target.value })}
                  name="otp"
                  type="text"
                  className="form-control PhoneInput"
                  placeholder="OTP"
                  maxLength={6}
                />
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
                {otpField && (
                  <p className="success-form text-danger">{otpField} </p>
                )}
              </div>
              <div className="mb-4 input-group position-relative username-text">
                <input
                  onChange={(e) =>
                    setUser({ ...user, referralCode: e.target.value })
                  }
                  readOnly={referralCode}
                  name="referralCode"
                  type="text"
                  className="form-control PhoneInput"
                  placeholder="Referral Code"
                  defaultValue={referralCode}
                />
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-block">
                  Register<i className="fas fa-sign-in-alt float-end mt-1"></i>
                </button>
              </div>
              <div className="mt-2 mb-1">
                <b>Already have User?</b>
                <Link to="/login" className="ms-1">
                  <b>Login here</b>
                </Link>
              </div>
              <small className="recaptchaTerms mt-1">
                This site is protected by reCAPTCHA and the Google
                <Link to="https://policies.google.com/privacy">
                  Privacy Policy
                </Link>
                and
                <Link to="https://policies.google.com/terms">
                  Terms of Service
                </Link>
                apply.
              </small>
            </form>
            <div>
              <div>
                <div
                  className="grecaptcha-badge"
                  data-style="none"
                  style={{
                    width: "256px",
                    height: "60px",
                    position: "fixed",
                    visibility: "hidden",
                  }}
                >
                  <div className="grecaptcha-logo">
                    <iframe
                      title="reCAPTCHA"
                      width="256"
                      height="60"
                      role="presentation"
                      name="a-dd131i5xyzuk"
                      frameBorder="0"
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdHQuwbAAAAAAqyOQcZt3bejXYn5jlgPj0bDOO7&amp;co=aHR0cHM6Ly93d3cubWdsaW9uYmV0LmNvbTo0NDM.&amp;hl=en&amp;type=image&amp;v=cwQvQhsy4_nYdnSDY4u7O5_B&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=f7vbzasy935k"
                    ></iframe>
                  </div>
                  <div className="grecaptcha-error"></div>
                  <textarea
                    id="g-recaptcha-response-6"
                    name="g-recaptcha-response"
                    className="g-recaptcha-response"
                    style={{
                      width: "250px",
                      height: "40px",
                      border: "1px solid rgb(193, 193, 193)",
                      margin: "10px 25px",
                      padding: "0px",
                      resize: "none",
                      display: "none",
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
