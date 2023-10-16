import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginBanner from "../../static/front/img/logo.png";
import { config } from "../../utils/config";
const Login = () => {
  const navigate = useNavigate();
  const loginApi = config?.result?.endpoint?.login;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }) => {
    if (username !== "demo") {
      return;
    } else if (password !== "1234") {
      return;
    } else if (username === "demo" && password === "1234") {
      fetch(loginApi, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.result.token);
          localStorage.setItem("loginName", data.result.loginName);
          const buttonValue = JSON.stringify(data.result.buttonValue.game);
          localStorage.setItem("game", buttonValue);
          if (
            localStorage.getItem("token") &&
            localStorage.getItem("loginName")
          ) {
            navigate("/");
          }
        });
    }
  };

  const loginWithDemo = () => {
    fetch(loginApi, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: "demo",
        password: 1234,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.result.token);
        localStorage.setItem("loginName", data.result.loginName);
        const buttonValue = JSON.stringify(data.result.buttonValue.game);
        localStorage.setItem("game", buttonValue);
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName")
        ) {
          navigate("/");
        }
      });
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="logo-login">
          <img src={loginBanner} />
        </div>
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
              <button
                onClick={loginWithDemo}
                type="button"
                className="btn btn-primary btn-block mt-2"
              >
                Login with demo ID
                <i className="fas fa-sign-in-alt float-end mt-1"></i>
              </button>
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
