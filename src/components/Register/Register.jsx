import { Link, useNavigate } from "react-router-dom";
import loginBanner from "../../static/front/img/logo.png";
import { config } from "../../utils/config";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { useForm } from "react-hook-form";
import Notification from "../Notification/Notification";
import UseState from "../../hooks/UseState";
const Register = () => {
  const pageTitle = config?.result?.settings?.siteTitle;
  const whatsappApi = config?.result?.endpoint?.whatsapp;
  const siteUrl = config?.result?.settings?.siteUrl;
  const userNameUrl = config?.result?.endpoint?.checkUsername;
  const registerUrl = config?.result?.endpoint?.register;
  const [userExist, setUserExist] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
  });
  const { setSuccessRegister } = UseState();
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [errRegister, setErrRegister] = useState("");
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const { data: whatsAppLink } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedVideoData = UseEncryptData({
        site: siteUrl,
        token: generatedToken,
      });
      const res = await axios.post(whatsappApi, encryptedVideoData);
      const data = res.data;
      if (data?.success) {
        return data?.result?.link;
      }
    },
  });

  const isUserExist = async (e) => {
    if (e.target.value.length > 3) {
      setUser({ ...user, userName: e.target.value });
      console.log(e.target.value);
      const generatedToken = UseTokenGenerator();
      const encryptedVideoData = UseEncryptData({
        username: e.target.value,
        token: generatedToken,
      });
      const res = await axios.post(userNameUrl, encryptedVideoData);
      const data = res.data;
      if (data?.success) {
        setUserErr(false);
        setUserExist(true);
      } else if (!data?.success) {
        setUserErr(true);
        setUserExist(false);
      }
    }
  };

  const onSubmit = () => {
    if (user?.password !== user?.confirmPassword) {
      return setConfirmPasswordErr("Password did not match !");
    } else {
      const generatedToken = UseTokenGenerator();
      const registerData = {
        username: user?.userName,
        password: user?.password,
        confirmPassword: user?.confirmPassword,
        mobile: user?.mobileNo,
        site: siteUrl,
        token: generatedToken,
      };
      const encryptedData = UseEncryptData(registerData);
      fetch(registerUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(encryptedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setSuccessRegister("User created successfully");
            navigate("/login");
          } else if (!data?.success) {
            setErrRegister("Unable to create user. Please try again.");
          }
        });
    }
  };

  return (
    <div className="wrapper">
      {errRegister && (
        <Notification
          message={errRegister}
          setMessage={setErrRegister}
          success={false}
        />
      )}
      <div className="login-page">
        <div className="login-box">
          <div className="logo-login">
            <Link to="/">
              <img src={loginBanner} />
            </Link>
          </div>
          <div className="login-form mt-4">
            <h4 className="text-center login-title">
              Register <i className="fas fa-hand-point-down"></i>
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <!-- whatsapp start--> */}
              {whatsAppLink && (
                <div className="whatsapp-box">
                  <div>
                    <span>Register as New User</span>
                    <h4>Get your instant ID from whatsapp</h4>
                  </div>
                  <Link to={whatsAppLink} className="create-whatsapp-link">
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
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => isUserExist(e)}
                />
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                {userErr && (
                  <p className="success-form text-danger">
                    Username is not available
                  </p>
                )}
              </div>

              <div className="mb-4 input-group position-relative">
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

              <div className="mb-4 input-group position-relative">
                <input
                  name="mobileNo"
                  type="tel"
                  className="form-control PhoneInput"
                  placeholder="Mobile No."
                  onChange={(e) =>
                    setUser({ ...user, mobileNo: e.target.value })
                  }
                />
                <span className="input-group-text">
                  <i className="fas fa-phone"></i>
                </span>
              </div>

              <div className="d-grid">
                <button
                  disabled={userExist ? false : true}
                  type="submit"
                  className="btn btn-primary btn-block"
                >
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
                <Link to="https://policies.google.com/privacy">Privacy Policy</Link>
                and
                <Link to="https://policies.google.com/terms">Terms of Service</Link>
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
