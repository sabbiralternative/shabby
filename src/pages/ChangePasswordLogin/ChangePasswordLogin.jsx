import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Notification from "../../components/Notification/Notification";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import UseState from "../../hooks/UseState";
import { API, settings } from "../../utils";

const ChangePasswordLogin = () => {
  const token = localStorage.getItem("token");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { logo } = UseState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  /* Site title */
  useEffect(() => {
    document.title = settings.siteTitle;
  }, []);
  /* Change password login api */
  const onSubmit = ({ password, newPassword, newPasswordConfirm }) => {
    /* Random token */
    const generatedToken = UseTokenGenerator();
    /* Encrypted post  data  */
    const encryptedData = UseEncryptData({
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
      token: generatedToken,
    });
    fetch(API.changePassword, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage(data?.result?.message);
          /* After change password , logout user, navigation user to login page */
          setTimeout(() => {
            localStorage.clear();
            navigate("/login");
          }, 1000);
        } else {
          setErrorMessage(data?.error?.oldPassword[0]?.description);
        }
      });
  };

  return (
    <div className="wrapper">
      {errorMessage && (
        <Notification
          message={errorMessage}
          success={false}
          setMessage={setErrorMessage}
        />
      )}
      {successMessage && (
        <Notification
          message={successMessage}
          success={true}
          setMessage={setSuccessMessage}
        />
      )}
      <div className="login-page">
        <div className="login-box">
          <Link to="/" className="logo-login">
            <img src={logo} />
          </Link>
          <div className="login-form mt-4">
            <h4 className="text-center login-title">
              LOGIN <i className="fas fa-hand-point-down"></i>
            </h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="login-chage-pass"
            >
              <div className="row row10">
                <div className="mb-3 position-relative">
                  <label className="form-label text-start w-100">
                    Current Password:
                  </label>
                  <input
                    {...register("password", { required: true })}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Current password"
                  />
                  {errors.password?.type === "required" && (
                    <p style={{ marginLeft: "8px" }} className="error-form">
                      Current Password is required.
                    </p>
                  )}
                </div>
              </div>
              <div className="row row10">
                <div className="mb-3 position-relative">
                  <label className="form-label text-start w-100">
                    New Password:
                  </label>
                  <input
                    {...register("newPassword", {
                      required: true,
                      pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                    })}
                    name="newPassword"
                    type="password"
                    className="form-control"
                    placeholder="Enter New Password"
                    aria-autocomplete="list"
                  />
                  {errors.newPassword?.type === "required" && (
                    <p style={{ marginLeft: "8px" }} className="error-form">
                      New Password is required.
                    </p>
                  )}
                  {errors.newPassword?.type === "pattern" && (
                    <p style={{ marginLeft: "8px" }} className="error-form">
                      New Password must contain at least: 1 uppercase letter, 1
                      lowercase letter, 1 number
                    </p>
                  )}
                </div>
              </div>
              <div className="row row10">
                <div className="mb-4 position-relative">
                  <label className="form-label text-start w-100">
                    Confirm Password:
                  </label>
                  <input
                    {...register("newPasswordConfirm", {
                      required: true,
                      pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                    })}
                    name="newPasswordConfirm"
                    type="password"
                    className="form-control"
                    placeholder="Confirm New Password"
                  />
                  {errors.newPasswordConfirm?.type === "required" && (
                    <p style={{ marginLeft: "8px" }} className="error-form">
                      New Password Confirmation is required.
                    </p>
                  )}
                  {errors.newPasswordConfirm?.type === "pattern" && (
                    <p style={{ marginLeft: "8px" }} className="error-form">
                      New Password Confirmation must contain at least: 1
                      uppercase letter, 1 lowercase letter, 1 number
                    </p>
                  )}
                </div>
              </div>
              <div className="row row10">
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary btn-block">
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordLogin;
