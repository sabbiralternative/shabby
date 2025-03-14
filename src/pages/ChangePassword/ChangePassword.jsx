import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Notification from "../../components/Notification/Notification";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API } from "../../utils";
const ChangePassword = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  /* handle Change password */
  const onSubmit = ({ password, newPassword, newPasswordConfirm }) => {
    /* random token */
    const generatedToken = UseTokenGenerator();
    /* Encrypted data */
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
    <div className="center-container">
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
      <div className="card" style={{ paddingLeft: "10px" }}>
        <div
          style={{ color: "black", paddingLeft: "0px" }}
          className="card-header"
        >
          <h4 className="card-title">Change Password</h4>
        </div>
        <div className="card-body">
          <div className="report-form">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="row row10">
                <div className="mb-3 position-relative col-md-6">
                  <label className="form-label">Current Password:</label>
                  <input
                    {...register("password", { required: true })}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Current password"
                  />

                  {errors.password?.type === "required" && (
                    <p className="error-form">Current Password is required.</p>
                  )}
                </div>
              </div>
              <div className="row row10">
                <div className="mb-3 position-relative col-md-6">
                  <label className="form-label">New Password:</label>
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
                    <p className="error-form">New Password is required.</p>
                  )}
                  {errors.newPassword?.type === "pattern" && (
                    <p className="error-form">
                      New Password must contain at least: 1 uppercase letter, 1
                      lowercase letter, 1 number
                    </p>
                  )}
                </div>
              </div>
              <div className="row row10">
                <div className="mb-4 position-relative col-md-6">
                  <label className="form-label">Confirm Password:</label>
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
                    <p className="error-form">
                      New Password Confirmation is required.
                    </p>
                  )}
                  {errors.newPasswordConfirm?.type === "pattern" && (
                    <p className="error-form">
                      New Password Confirmation must contain at least: 1
                      uppercase letter, 1 lowercase letter, 1 number
                    </p>
                  )}
                </div>
              </div>
              <div className="row row10">
                <div className="mb-3 col-md-6">
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

export default ChangePassword;
