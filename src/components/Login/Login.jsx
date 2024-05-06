import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { config } from "../../utils/config";
import { useEffect, useState } from "react";
import Notification from "../Notification/Notification";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import UseState from "../../hooks/UseState";

const Login = () => {
  const navigate = useNavigate();
  const loginApi = config?.result?.endpoint?.login;
  const [errorLogin, setErrorLogin] = useState("");
  const pageTitle = config?.result?.settings?.siteTitle;
  const isDemoButtonShow = config?.result?.settings?.demoLogin;
  const isRegisterButtonShow = config?.result?.settings?.registration;
  const siteUrl = config?.result?.settings?.siteUrl
  const { successRegister, setSuccessRegister, logo } = UseState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Dynamically append the site title from notice.json */
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  /* handle login user */
  const onSubmit = ({ username, password }) => {
    /* Random token generator */
    const generatedToken = UseTokenGenerator();
    const loginData = {
      username: username,
      site:siteUrl,
      password: password,
      token: generatedToken,
    };
    /* Encrypted the post data */
    const encryptedData = UseEncryptData(loginData);
    fetch(loginApi, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
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
          localStorage.setItem("modal", JSON.stringify(modal));
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
              navigate("/");
            } else {
              localStorage.setItem("forceLoginSuccess", "true");
              navigate("/");
            }
          }
        }
        
        
        else {
          setErrorLogin(data?.error);
        }
      });
  };

  /* handle login demo user */
  const loginWithDemo = () => {
    /* Random token generator */
    const generatedToken = UseTokenGenerator();
    /* Encrypted the post data */
    const loginData = UseEncryptData({
      username: "demo",
      password: "",
      token: generatedToken,
    });
    fetch(loginApi, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        /* Set token to localeStorage */
        localStorage.setItem("token", data.result.token);
        /* Set login name to locale storage */
        localStorage.setItem("loginName", data.result.loginName);
        /* set button value to locale storage */
        const buttonValue = JSON.stringify(data.result.buttonValue.game);
        /* set modal picture to locale storage for the open modal in home page */
        localStorage.setItem("buttonValue", buttonValue);
        const modal = [
          { banner: data?.result?.banner },
          { bannerTitle: data?.result?.bannerTitle },
        ];
        localStorage.setItem("modal", JSON.stringify(modal));
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
            navigate("/");
            /* if token, login name, and result.password === false then navigation change-password-login page */
          } else {
            localStorage.setItem("forceLoginSuccess", "true");
            navigate("/");
          }
        } else {
          setErrorLogin(data?.error);
        }
      });
  };

  return (
    <div className="login-page">
      {/* success message ater login */}
      {successRegister && (
        <Notification
          message={successRegister}
          setMessage={setSuccessRegister}
          success={true}
        />
      )}
      {/* error message during the login time */}
      {errorLogin && (
        <Notification
          message={errorLogin}
          success={false}
          setMessage={setErrorLogin}
        />
      )}
      <div className="login-box">
        <Link to="/" className="logo-login">
          <img src={logo} />
        </Link>
        <div className="login-form mt-4">
          <h4 className="text-center login-title">
            LOGIN <i className="fas fa-hand-point-down"></i>
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 input-group position-relative">
              <input
                {...register("username", { required: true })}
                name="username"
                type="text"
                className="form-control"
                placeholder="Username"
              />
              <span className="input-group-text" autoComplete="on">
                <i className="fas fa-user"></i>
              </span>

              {errors.username && (
                <p className="error-form">This input is required.</p>
              )}
            </div>
            <div className="mb-4 input-group position-relative">
              <input
                {...register("password", { required: true })}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="input-group-text">
                <i className="fas fa-key"></i>
              </span>
              {errors.password && (
                <p className="error-form">This input is required.</p>
              )}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">
                Login<i className="fas fa-sign-in-alt float-end mt-1"></i>
              </button>
              {/* if in notice.json demoLogin true then show button value  */}
              {isDemoButtonShow && (
                <button
                  onClick={loginWithDemo}
                  type="button"
                  className="btn btn-primary btn-block mt-2"
                >
                  Login with demo ID
                  <i className="fas fa-sign-in-alt float-end mt-1"></i>
                </button>
              )}
              {/* if in notice.json demo registration true then showing registration button   */}
              {isRegisterButtonShow && (
                <div className="d-grid">
                  <Link
                    to="/register"
                    className="btn btn-secondary btn-block mt-2"
                  >
                    Register
                    <i className="fas fa-sign-in-alt float-end mt-1"></i>
                  </Link>
                </div>
              )}
            </div>
            <small className="recaptchaTerms mt-1">
              This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy">
                {" "}
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms">
                Terms of Service
              </a>{" "}
              apply.
            </small>
            <p className="mt-1"></p>
          </form>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
