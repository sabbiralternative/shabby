import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
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
