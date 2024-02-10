import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { config } from "../../utils/config";
AOS.init();

const Footer = () => {
  /* modal state */
  const [showModal, setShowModal] = useState(false);
  /* get modal */
  const modal = JSON.parse(localStorage.getItem('modal'))
  /* site title from notice.json */
  const siteTitle = config?.result?.settings?.siteTitle
  /* token from locale storage */
  const token = localStorage.getItem('token')

  /* show modal after login */
  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");
    if (!hasModalBeenShown) {
      setTimeout(() => {
        setShowModal(true);
      }, 200);
    }
  }, []);
/* close modal */
  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("hasModalBeenShown", "true");
  };

  const modalStyle = {
    position: "fixed",
    top: showModal ? "0px" : "-100%",
    transition: "transform 0.5s ease",
    left: "0",
    zIndex: 1055,
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    outline: "0",
  };

  return (
    <>
      {showModal && token && (
        <>
          <div className={`fade modal-backdrop show`}></div>
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            role="dialog"
            aria-modal="true"
            className={` fade  show `}
            tabIndex="-1"
            style={{
              display: "block",
              ...modalStyle,
            }}
          >
            <div className={`modal-dialog modal-lg `}>
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title h4">
               {modal && modal[1].bannerTitle}
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
                    src={modal && modal[0].banner}
                    className="img-fluid"
                    style={{
                      width:'100%',
                      objectFit:'contain'
                    }}
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
          © Copyright {new Date().getFullYear()}. All Rights Reserved. Powered by {siteTitle}.
        </p>
      </div>
    </>
  );
};

export default Footer;
