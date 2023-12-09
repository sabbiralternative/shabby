const RaceTwenty = ({
  data,
  setPlaceBetValue,
  setShowBets,
  lowExposure,
  highExposure,
  zeroIndexTwoExp,
  zeroIndexThreeExp,
  evenExposure,
  oddExposure,
  redExposure,
  blackExposure,
  a23Exposure,
  four56Exposure,
}) => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">
            <img src="/cards/S13.jpg" />
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[0]?.back[0]?.price,
                side: 0,
                selectionId: data[0]?.runners[0]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                back: true,
                name: data[0]?.runners[0]?.name,
                isWeak: data[0]?.isWeak,
              });
            }}
            className={`casino-odds-box back  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[0]?.status === "ACTIVE"
                ? ""
                : "suspended-box"
            }`}
          >
            <span className="casino-odds">
              {" "}
              {data[0]?.runners[0]?.back[0]?.price}
            </span>
            <div className="casino-volume">10000</div>
            {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[0]?.lay[0]?.price,
                side: 1,
                selectionId: data[0]?.runners[0]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                lay: true,
                name: data[0]?.runners[0]?.name,
                isWeak: data[0]?.isWeak,
              });
            }}
            className={`casino-odds-box lay  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[0]?.status === "ACTIVE"
                ? ""
                : "suspended-box"
            }`}
          >
            <span className="casino-odds">
              {" "}
              {data[0]?.runners[0]?.lay[0]?.price}
            </span>
            <div className="casino-volume">10000</div>
            {/*   <!-- suspended-box >> key0 >> status :  key0 >> runner0 >> lay >> price --> */}
          </div>

          <div className="casino-nation-book text-center w-100">
            <span
              className={`${
                lowExposure && lowExposure[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {lowExposure ? lowExposure[0]?.pnl : null}
            </span>
          </div>
        </div>

        <div className="casino-odd-box-container">
          <div className="casino-nation-name">
            <img src="/cards/H13.jpg" />
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[1]?.back[0]?.price,
                side: 0,
                selectionId: data[0]?.runners[1]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                back: true,
                name: data[0]?.runners[1]?.name,
                isWeak: data[0]?.isWeak,
              });
            }}
            className={`casino-odds-box back  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[1]?.status === "ACTIVE"
                ? ""
                : "suspended-box"
            }`}
          >
            <span className="casino-odds">
              {" "}
              {data[0]?.runners[1]?.back[0]?.price}
            </span>
            <div className="casino-volume">10000</div>
            {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[1]?.lay[0]?.price,
                side: 1,
                selectionId: data[0]?.runners[1]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                lay: true,
                name: data[0]?.runners[1]?.name,
                isWeak: data[0]?.isWeak,
              });
            }}
            className={`casino-odds-box lay  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[1]?.status === "ACTIVE"
                ? ""
                : "suspended-box"
            }`}
          >
            <span className="casino-odds">
              {" "}
              {data[0]?.runners[1]?.lay[0]?.price}
            </span>
            <div className="casino-volume">10000</div>
            {/*   <!-- suspended-box >> key0 >> status :  key0 >> runner0 >> lay >> price --> */}
          </div>

          <div className="casino-nation-book text-center w-100">
            <span
              className={`${
                highExposure && highExposure[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {highExposure ? highExposure[0]?.pnl : null}
            </span>
          </div>
        </div>

        <div className="casino-odd-box-container">
          <div className="casino-nation-name">
            <img src="/cards/C13.jpg" />
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[2]?.back[0]?.price,
                side: 0,
                selectionId: data[0]?.runners[2]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                back: true,
                name: data[0]?.runners[2]?.name,
                isWeak: data[0]?.isWeak,
              });
            }}
            className={`casino-odds-box back  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[2]?.status === "ACTIVE"
                ? ""
                : "suspended-box"
            }`}
          >
            <span className="casino-odds">
              {" "}
              {data[0]?.runners[2]?.back[0]?.price}
            </span>
            <div className="casino-volume">10000</div>
            {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[2]?.lay[0]?.price,
                side: 1,
                selectionId: data[0]?.runners[2]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                lay: true,
                name: data[0]?.runners[2]?.name,
                isWeak: data[0]?.isWeak,
              });
            }}
            className={`casino-odds-box lay  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[2]?.status === "ACTIVE"
                ? ""
                : "suspended-box"
            }`}
          >
            <span className="casino-odds">
              {" "}
              {data[0]?.runners[2]?.lay[0]?.price}
            </span>
            <div className="casino-volume">10000</div>
            {/*   <!-- suspended-box >> key0 >> status :  key0 >> runner0 >> lay >> price --> */}
          </div>

          <div className="casino-nation-book text-center w-100">
            <span
              className={`${
                zeroIndexTwoExp && zeroIndexTwoExp[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {zeroIndexTwoExp ? zeroIndexTwoExp[0]?.pnl : null}
            </span>
          </div>
        </div>

        <div className="casino-odd-box-container">
          <div className="casino-nation-name">
            <img src="/cards/D13.jpg" />
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[3]?.back[0]?.price,
                side: 0,
                selectionId: data[0]?.runners[3]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                back: true,
                name: data[0]?.runners[3]?.name,
                isWeak: data[0]?.isWeak,
              });
            }}
            className={`casino-odds-box back  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[3]?.status === "ACTIVE"
                ? ""
                : "suspended-box"
            }`}
          >
            <span className="casino-odds">
              {" "}
              {data[0]?.runners[3]?.back[0]?.price}
            </span>
            <div className="casino-volume">10000</div>
            {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
          </div>

          <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[3]?.lay[0]?.price,
                side: 1,
                selectionId: data[0]?.runners[3]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                lay: true,
                name: data[0]?.runners[3]?.name,
                isWeak: data[0]?.isWeak,
              });
            }}
            className={`casino-odds-box lay  ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[3]?.status === "ACTIVE"
                ? ""
                : "suspended-box"
            }`}
          >
            <span className="casino-odds">
              {" "}
              {data[0]?.runners[3]?.lay[0]?.price}
            </span>
            <div className="casino-volume">10000</div>
            {/*   <!-- suspended-box >> key0 >> status :  key0 >> runner0 >> lay >> price --> */}
          </div>

          <div className="casino-nation-book text-center w-100">
            <span
              className={`${
                zeroIndexThreeExp && zeroIndexThreeExp[0]?.pnl < 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {zeroIndexThreeExp ? zeroIndexThreeExp[0]?.pnl : null}
            </span>
          </div>
        </div>
      </div>

      <div className="casino-table-box mt-3">
        <div className="casino-table-right-box">
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">Win with 5</div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[1]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[1]?.runners[0]?.id,
                  btype: data[1]?.btype,
                  eventTypeId: data[1]?.eventTypeId,
                  betDelay: data[1]?.betDelay,
                  marketId: data[1]?.id,
                  back: true,
                  name: data[1]?.runners[0]?.name,
                  isWeak: data[1]?.isWeak,
                });
              }}
              className={`casino-odds-box back  ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[1]?.runners[0]?.back[0]?.price}
              </span>
              <div className="casino-volume">10000</div>
              {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
            </div>

            <div className="casino-nation-book text-center w-100">
              <span
                className={`${
                  evenExposure && evenExposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {evenExposure ? evenExposure[0]?.pnl : null}
              </span>
            </div>
          </div>
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">Win with 6</div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[1]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[1]?.runners[1]?.id,
                  btype: data[1]?.btype,
                  eventTypeId: data[1]?.eventTypeId,
                  betDelay: data[1]?.betDelay,
                  marketId: data[1]?.id,
                  back: true,
                  name: data[1]?.runners[1]?.name,
                  isWeak: data[1]?.isWeak,
                });
              }}
              className={`casino-odds-box back  ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[1]?.runners[1]?.back[0]?.price}
              </span>
              <div className="casino-volume">10000</div>
              {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
            </div>

            <div className="casino-nation-book text-center w-100">
              <span
                className={`${
                  oddExposure && oddExposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {oddExposure ? oddExposure[0]?.pnl : null}
              </span>
            </div>
          </div>

          <div className="casino-odd-box-container">
            <div className="casino-nation-name">Win with 7</div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[1]?.runners[2]?.back[0]?.price,
                  side: 0,
                  selectionId: data[1]?.runners[2]?.id,
                  btype: data[1]?.btype,
                  eventTypeId: data[1]?.eventTypeId,
                  betDelay: data[1]?.betDelay,
                  marketId: data[1]?.id,
                  back: true,
                  name: data[1]?.runners[2]?.name,
                  isWeak: data[1]?.isWeak,
                });
              }}
              className={`casino-odds-box back  ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[2]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[1]?.runners[2]?.back[0]?.price}
              </span>
              <div className="casino-volume">10000</div>
              {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
            </div>

            <div className="casino-nation-book text-center w-100">
              <span
                className={`${
                  redExposure && redExposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {redExposure ? redExposure[0]?.pnl : null}
              </span>
            </div>
          </div>

          <div className="casino-odd-box-container">
            <div className="casino-nation-name">Win with 15</div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[1]?.runners[3]?.back[0]?.price,
                  side: 0,
                  selectionId: data[1]?.runners[3]?.id,
                  btype: data[1]?.btype,
                  eventTypeId: data[1]?.eventTypeId,
                  betDelay: data[1]?.betDelay,
                  marketId: data[1]?.id,
                  back: true,
                  name: data[1]?.runners[3]?.name,
                  isWeak: data[1]?.isWeak,
                });
              }}
              className={`casino-odds-box back  ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[3]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[1]?.runners[3]?.back[0]?.price}
              </span>
              <div className="casino-volume">10000</div>
              {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
            </div>

            <div className="casino-nation-book text-center w-100">
              <span
                className={`${
                  blackExposure && blackExposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {blackExposure ? blackExposure[0]?.pnl : null}
              </span>
            </div>
          </div>

          <div className="casino-odd-box-container">
            <div className="casino-nation-name">Win with 16</div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[1]?.runners[4]?.back[0]?.price,
                  side: 0,
                  selectionId: data[1]?.runners[4]?.id,
                  btype: data[1]?.btype,
                  eventTypeId: data[1]?.eventTypeId,
                  betDelay: data[1]?.betDelay,
                  marketId: data[1]?.id,
                  back: true,
                  name: data[1]?.runners[4]?.name,
                  isWeak: data[1]?.isWeak,
                });
              }}
              className={`casino-odds-box back  ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[4]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[1]?.runners[4]?.back[0]?.price}
              </span>
              <div className="casino-volume">10000</div>
              {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
            </div>

            <div className="casino-nation-book text-center w-100">
              <span
                className={`${
                  a23Exposure && a23Exposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {a23Exposure ? a23Exposure[0]?.pnl : null}
              </span>
            </div>
          </div>

          <div className="casino-odd-box-container">
            <div className="casino-nation-name">Win with 17</div>

            <div
              onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[1]?.runners[5]?.back[0]?.price,
                  side: 0,
                  selectionId: data[1]?.runners[5]?.id,
                  btype: data[1]?.btype,
                  eventTypeId: data[1]?.eventTypeId,
                  betDelay: data[1]?.betDelay,
                  marketId: data[1]?.id,
                  back: true,
                  name: data[1]?.runners[5]?.name,
                  isWeak: data[1]?.isWeak,
                });
              }}
              className={`casino-odds-box back  ${
                data[1]?.status === "OPEN" &&
                data[1]?.runners[5]?.status === "ACTIVE"
                  ? ""
                  : "suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[1]?.runners[5]?.back[0]?.price}
              </span>
              <div className="casino-volume">10000</div>
              {/*  <!-- suspended-box >> key0 >> status:  key0 >> runner0 >> back >> price --> */}
            </div>

            <div className="casino-nation-book text-center w-100">
              <span
                className={`${
                  four56Exposure && four56Exposure[0]?.pnl < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {four56Exposure ? four56Exposure[0]?.pnl : null}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceTwenty;
