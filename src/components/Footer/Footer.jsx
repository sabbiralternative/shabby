import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");
    if (!hasModalBeenShown) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem("hasModalBeenShown", "true");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <>
          <div className="fade modal-backdrop show"></div>
          <div
            role="dialog"
            aria-modal="true"
            className="fade modal show"
            tabIndex="-1"
            style={{
              display: "block",
            }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title h4">
                    Be Aware Of Phishing Websites. Check Website Before Log In.
                    We Requesting You To Enable 2 Step Security Auth To Secure
                    Your Account.
                  </div>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="p-0 modal-body">
                  <img
                    src="https://sitethemedata.com/common/wel-banner/wel-1697093837368.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <section className="footer">
        <div className="footer-top">
          <div className="support-detail">
            <h2>24X7 Support</h2>
            <p></p>
          </div>
          <div className="social-icons-box"></div>
        </div>
      </section>
      <div className="footer-bottom">
        <div className="secure-logo">
          <div>
            <img src="https://wver.sprintstaticdata.com/v3/static/front/img/ssl.png" />
          </div>
          <div className="ml-2">
            <b>100% SAFE</b>
            <div>Protected connection and encrypted data.</div>
          </div>
        </div>
        <div className="d-inline-block">
          <Link to="/javascript:void(0)">
            <img src="https://g1ver.sprintstaticdata.com/v8/static/front/img/18plus.png" />
          </Link>
          <Link to="https://www.gamcare.org.uk/">
            <img src="https://g1ver.sprintstaticdata.com/v8/static/front/img/gamecare.png" />
          </Link>
          <Link to="https://www.gamblingtherapy.org/">
            <img src="https://g1ver.sprintstaticdata.com/v8/static/front/img/gt.png" />
          </Link>
        </div>
      </div>
      <div className="footer-text">
        <p></p>
        <p className="text-center">
          © Copyright 2023. All Rights Reserved. Powered by SHABBY247.
        </p>
      </div>
    </>
  );
};

export default Footer;

// import React, { useState, useEffect } from 'react';

// const FirstTimeModal = () => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Check if the modal has been shown before
//     const hasModalBeenShown = localStorage.getItem('hasModalBeenShown');

//     if (!hasModalBeenShown) {
//       // If the modal hasn't been shown before, display it
//       setShowModal(true);
//     }
//   }, []);

//   const closeModal = () => {
//     // Set the flag in localStorage to prevent the modal from showing again
//     localStorage.setItem('hasModalBeenShown', 'true');
//     setShowModal(false);
//   };

//   if (!showModal) {
//     return null; // Don't render the modal if showModal is false
//   }

//   return (
//     // Your modal JSX code here
//     <div>
//       <div className="fade modal-backdrop show"></div>
//       <div role="dialog" aria-modal="true" className="fade modal show" tabIndex="-1" style={{ display: 'block' }}>
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             {/* ... Your modal content ... */}
//             <button onClick={closeModal} type="button" className="btn-close" aria-label="Close"></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstTimeModal;
