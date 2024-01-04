import { Link } from "react-router-dom";
import loginBanner from "../../static/front/img/logo.png";
import { config } from "../../utils/config";
import { useEffect } from "react";
const Register = () => {
  const pageTitle = config?.result?.settings?.siteTitle;
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <div className="wrapper">
      <div className="login-page">
        <div className="login-box">
          <div className="logo-login">
            <img src={loginBanner} />
          </div>
          <div className="login-form mt-4">
            <h4 className="text-center login-title">
              Register <i className="fas fa-hand-point-down"></i>
            </h4>
            <form data-gtm-form-interact-id="1">
              <div className="whatsapp-box">
                <div>
                  <span>Register as New User</span>
                  <h4>Get your instant ID from whatsapp</h4>
                </div>
                <a
                  href="undefined"
                  target="_blank"
                  className="create-whatsapp-link"
                >
                  <div className="whatsapp-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="click-here">click here</div>
                </a>
              </div>
              <div className="mb-4 input-group position-relative">
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  data-gtm-form-interact-field-id="2"
                />
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <div className="mb-4 input-group position-relative">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  data-gtm-form-interact-field-id="3"
                />
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <div className="mb-4 input-group position-relative">
                <input
                  name="passwordConfirm"
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>

              <div className="mb-4 input-group position-relative">
                <input
                  name="passwordConfirm"
                  type="tel"
                  className="form-control PhoneInput"
                  placeholder="Mobile No."
                />
                <span className="input-group-text">
                  <i className="fas fa-phone"></i>
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
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                and
                <a href="https://policies.google.com/terms">Terms of Service</a>
                apply.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
