/* eslint-disable react/no-unknown-property */

const CasinoHighLight = () => {
  return (
    <>
      {window.innerWidth < 1200 ? (
        <div>
          <div _ngcontent-llj-c97 className="row mx-0 mt-1">
            <div
              _ngcontent-llj-c97
              className="col-6 position-relative"
              style={{ paddingRight: "1px", paddingLeft: "1px" }}
              tabIndex={0}
            >
              <img
                _ngcontent-llj-c97
                src="/assets/aviator.gif"
                className="img-fluid"
              />
            </div>
            <div
              _ngcontent-llj-c97
              className="col-6 position-relative"
              style={{ paddingLeft: "1px", paddingRight: "1px" }}
              tabIndex={0}
            >
              <img
                _ngcontent-llj-c97
                src="/assets/evoplay.gif"
                className="img-fluid"
              />
            </div>
          </div>
          <div
            _ngcontent-llj-c97
            className="row mx-0"
            style={{ marginTop: "2px" }}
          >
            <div
              _ngcontent-llj-c97
              className="col-6 position-relative popularDiv"
              style={{ paddingRight: "1px", paddingLeft: "1px" }}
              tabIndex={0}
            >
              <img
                _ngcontent-llj-c97
                src="/assets/fungames.gif"
                className="img-fluid"
              />
            </div>
            <div
              _ngcontent-llj-c97
              className="col-6 position-relative popularDiv"
              style={{ paddingLeft: "1px", paddingRight: "1px" }}
              tabIndex={0}
            >
              <img
                _ngcontent-llj-c97
                src="/assets/wingogames.gif"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          _ngcontent-skb-c99
          className="row mx-0"
          style={{ marginBottom: "2px" }}
        >
          <div
            _ngcontent-skb-c99
            className="col-3 position-relative"
            style={{ paddingLeft: "1px", paddingRight: "1px" }}
            tabIndex={0}
          >
            <img
              _ngcontent-skb-c99
              src="/assets/evoplay.gif"
              className="img-fluid"
            />
          </div>
          <div
            _ngcontent-skb-c99
            className="col-3 position-relative"
            style={{ paddingLeft: "1px", paddingRight: "1px" }}
            tabIndex={0}
          >
            <img
              _ngcontent-skb-c99
              src="/assets/aviator.gif"
              className="img-fluid"
            />
          </div>
          <div
            _ngcontent-skb-c99
            className="col-3 position-relative"
            style={{ paddingLeft: "1px", paddingRight: "1px" }}
            tabIndex={0}
          >
            <img
              _ngcontent-skb-c99
              src="/assets/fungames.gif"
              className="img-fluid"
            />
          </div>
          <div
            _ngcontent-skb-c99
            className="col-3 position-relative"
            style={{ paddingLeft: "1px", paddingRight: "1px" }}
            tabIndex={0}
          >
            <img
              _ngcontent-skb-c99
              src="/assets/wingogames.gif"
              className="img-fluid"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CasinoHighLight;
