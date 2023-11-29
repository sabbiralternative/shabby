const SecureAuth = () => {
  return (
    <div className="center-container">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Secure Auth Verification</h4>
        </div>
        <div className="card-body">
          <div className="container-fluid mt-3 secure-auth">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <div>
                  <span>Secure Auth Verification Status:</span>
                  <b className="bg-danger p-2 text-white ms-3">Disabled</b>
                </div>
                <div className="mt-1">
                  Please select below option to enable secure auth verification
                </div>
                <div className="nav nav-tabs" role="tablist">
                  <div className="nav-item">
                    <a
                      role="tab"
                      data-rr-ui-event-key="1"
                      id="secure-auth-tabs-tab-1"
                      aria-controls="secure-auth-tabs-tabpane-1"
                      aria-selected="false"
                      tabIndex="-1"
                      className="nav-link"
                      href="#"
                    >
                      Enable Using Mobile
                    </a>
                  </div>
                  <div className="nav-item">
                    <a
                      role="tab"
                      data-rr-ui-event-key="2"
                      id="secure-auth-tabs-tab-2"
                      aria-controls="secure-auth-tabs-tabpane-2"
                      aria-selected="false"
                      tabIndex="-1"
                      className="nav-link"
                      href="#"
                    >
                      Enable Using Telegram
                    </a>
                  </div>
                </div>
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    id="secure-auth-tabs-tabpane-1"
                    aria-labelledby="secure-auth-tabs-tab-1"
                    className="fade tab-pane"
                  >
                    <div className="mt-1">
                      <b>
                        If you havent downloaded,
                        <br />
                        please download Secure Auth Verification App from below
                        link.
                      </b>
                    </div>
                    <div className="mt-1">
                      Using this app you will receive auth code during login
                      authentication
                    </div>
                    <div className="mt-1">
                      <a href="https://nd.sprintstaticdata.com/secure-auth-apk/2WayAuthApp-1.8.apk">
                        <button className="btn btn-success">
                          <div>
                            <i className="fab fa-android"></i>
                          </div>
                          <div className="ms-2">
                            <b>DOWNLOAD</b>
                            <br />
                            <span>On the android</span>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    id="secure-auth-tabs-tabpane-2"
                    aria-labelledby="secure-auth-tabs-tab-2"
                    className="fade tab-pane"
                  >
                    <div className="mt-2">
                      Please enter your login password to continue
                    </div>
                    <div className="login-password mt-1">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your login password"
                        value="Poiu@1234"
                      />
                      <button className="btn btn-success">
                        Get Connection ID
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureAuth;
