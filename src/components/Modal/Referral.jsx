/* eslint-disable react/no-unknown-property */

import { useRef, useState } from "react";
import useGetIndex from "../../hooks/useGetIndex";
import CloseModalClickOutside from "../../hooks/CloseModalClickOutside";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";
import Notification from "../Notification/Notification";
import UseState from "../../hooks/UseState";
import { Toaster } from "react-hot-toast";

const Referral = ({ setShowReferral }) => {
  const [success, setSuccess] = useState("");
  const { logo } = UseState();

  const referralRef = useRef();
  CloseModalClickOutside(referralRef, () => {
    setShowReferral(false);
  });
  const { data } = useGetIndex();
  console.log(data);
  return (
    <>
      {success && (
        <Notification
          message={success}
          success={true}
          setMessage={setSuccess}
        />
      )}
      <div className="cdk-overlay-container">
        <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
        <div
          className="cdk-global-overlay-wrapper"
          dir="ltr"
          style={{ justifyContent: "center", alignItems: "flex-end" }}
        >
          <div
            id="cdk-overlay-4"
            className="cdk-overlay-pane referral-dialog"
            style={{
              width: "calc(100% - 30px)",
              maxWidth: "500px",
              position: "static",
              marginBottom: "10px",
              zIndex: 9999,
            }}
          >
            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            ></div>
            <div
              className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
              id="mat-mdc-dialog-3"
              role="dialog"
              aria-modal="true"
              style={{
                maxWidth: "600px",
                margin: "auto",
                position: "static",
                display: "block",
              }}
            >
              <div className="mdc-dialog__container" ref={referralRef}>
                <div
                  style={{ borderRadius: "10px" }}
                  className="mat-mdc-dialog-surface mdc-dialog__surface"
                >
                  <div _nghost-ng-c526813732="" className="ng-star-inserted">
                    <div _ngcontent-ng-c526813732="" className="referral-modal">
                      <div _ngcontent-ng-c526813732="" className="modal-header">
                        <div _ngcontent-ng-c526813732="" className="img-wrap">
                          <img
                            _ngcontent-ng-c526813732=""
                            alt="logo"
                            src={logo}
                            className="ng-star-inserted"
                          />
                        </div>
                        <button
                          style={{ border: "none" }}
                          onClick={() => setShowReferral(false)}
                          _ngcontent-ng-c526813732=""
                          mat-button=""
                          mat-dialog-close=""
                          className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                          type="button"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ng-tns-c159-13"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.91703 10.7588C2.68924 10.9867 2.68928 11.356 2.9171 11.5838C3.14493 11.8116 3.51427 11.8116 3.74206 11.5837L7.00012 8.32511L10.2584 11.5834C10.4862 11.8112 10.8556 11.8112 11.0834 11.5834C11.3112 11.3556 11.3112 10.9863 11.0834 10.7585L7.82501 7.5001L11.0832 4.24138C11.3109 4.01356 11.3109 3.64421 11.083 3.41643C10.8552 3.18864 10.4859 3.18867 10.2581 3.4165L7 6.67516L3.74166 3.41678C3.51386 3.18897 3.14451 3.18897 2.91671 3.41678C2.6889 3.64459 2.6889 4.01393 2.91671 4.24174L6.17517 7.50016L2.91703 10.7588Z"
                              fill="white"
                              className="ng-tns-c159-13"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div
                        _ngcontent-ng-c526813732=""
                        className="modal-body"
                        style={{ backgroundColor: "white" }}
                      >
                        <h3 _ngcontent-ng-c526813732="">Refer and earn</h3>
                        <p _ngcontent-ng-c526813732="">
                          Be our brand hero, refer your friend using your refer
                          code.
                        </p>
                        <div
                          _ngcontent-ng-c526813732=""
                          className="referral-code"
                        >
                          <p
                            style={{ textTransform: "lowercase" }}
                            _ngcontent-ng-c526813732=""
                            className="refer-code-text"
                          >
                            {data?.link}
                          </p>
                          <button
                            style={{ color: "white" }}
                            onClick={() =>
                              handleCopyToClipBoard(data?.text, setSuccess)
                            }
                            _ngcontent-ng-c526813732=""
                            className="btn secondary-btn"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Referral;
