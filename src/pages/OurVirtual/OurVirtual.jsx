const OurVirtual = () => {
  return (
    <div className="center-container">
      <div className="casino-tab-list d-xl-none">
        <ul className="nav nav-pills casino-tab" id="casino-tab">
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/4">
              <span>Our Casino</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/casino-list/LC/19">
              <span>Our Virtual</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="casino-sub-tab-list">
        <ul className="nav nav-pills casino-sub-tab" id="casino-sub-tab">
          <li className="nav-item">
            <a className="nav-link active" href="/casino-list/LC/19/82">
              <span>All Casino</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/19/79">
              <span>Teenpatti</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/19/80">
              <span>Dragon Tiger</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/19/81">
              <span>Lucky 7</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/19/91">
              <span>Bollywood</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list/LC/19/96">
              <span>Others</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content mt-xl-2 mt-1">
        <div className="tab-pane active" id="all-casino">
          <div className="casino-list">
            <div className="casino-list-item">
              <a href="/casino/vlucky7">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vlucky7.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className="casino-list-item">
              <a href="/casino/vtrio">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vtrio.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className="casino-list-item">
              <a href="/casino/vdtl20">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vdtl20.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className="casino-list-item">
              <a href="/casino/vteenmuf">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vteenmuf.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className="casino-list-item">
              <a href="/casino/vaaa">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vaaa.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className="casino-list-item">
              <a href="/casino/vbtable">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vbtable.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className="casino-list-item">
              <a href="/casino/vdt6">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vdt6.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className="casino-list-item">
              <a href="/casino/vteen">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vteen.jpg')",
                  }}
                ></div>
              </a>
            </div>
            <div className="casino-list-item">
              <a href="/casino/vteen20">
                <div
                  className="casino-list-item-banner"
                  style={{
                    backgroundImage:
                      "url('https://nd.sprintstaticdata.com/casino-icons/vc/vteen20.jpg')",
                  }}
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="slot-iframe">
        <iframe
          scrolling="no"
          allow="fullscreen;"
          src=""
          style={{ width: "100%", border: "0px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default OurVirtual;
