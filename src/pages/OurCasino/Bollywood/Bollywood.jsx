const Bollywood = ({  data,
    setShowBets,
    setPlaceBetValue,
    zeroIndexTwoRunnersEx,
    lowExposure,
    highExposure,
    evenExposure,
    zeroIndexFiveRunnersEx,
    redExposure,
    blackExposure,
    four56Exposure,
    pnlBySelection,
    zeroIndexThreeRunnersEx,
    zeroIndexFourRunnersEx,
    a23Exposure,}) => {
    return (
        <div className="casino-table">
        <div className="casino-table-box">
          {/* Data [0] runners [0] */}
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              A.Don
              <div className="casino-nation-book d-md-none"></div>
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
              className={`casino-odds-box back ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}
            >
              <span className="casino-odds">
                {" "}
                {data[0]?.runners[0]?.back[0]?.price}{" "}
              </span>
              {/*         <!-- suspended-box key0 > >status :  key0 >> runner0 >> back >> price --> */}
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
              className={`casino-odds-box lay ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}
            >
              <span className="casino-odds">
                {data[0]?.runners[0]?.lay[0]?.price}
              </span>
              {/*     <!-- suspended-box :  key0 >> runner0 >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
 
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
          {/* data [0] runners [1] */}
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              B.Amar Akbar Anthony
              <div className="casino-nation-book d-md-none"></div>
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
            className={`casino-odds-box back ${
                data[0]?.status === "OPEN" &&
                data[0]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
              <span className="casino-odds">{data[0]?.runners[1]?.back[0]?.price}</span>
              {/*  <!-- suspended-box key0 > >status :  key0 >> runner1 >> back >> price --> */}
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
                : " suspended-box"
            }`}>
              <span className="casino-odds"> {data[0]?.runners[1]?.lay[0]?.price}</span>
              {/*   <!-- suspended-box key0 > >status :  key0 >> runner1 >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
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

          {/* Data [0] runners [2] */}
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              C.Sahib Bibi Aur Ghulam
              <div className="casino-nation-book d-md-none"></div>
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
            className={`casino-odds-box back ${
              data[0]?.status === "OPEN" &&
              data[0]?.runners[2]?.status === "ACTIVE"
                ? ""
                : " suspended-box"
            }`}>
              <span className="casino-odds"> {data[0]?.runners[2]?.back[0]?.price}</span>
              {/*    <!-- suspended-box key0 > >status :  key0 >> runner2 >> back >> price --> */}
            </div>
            <div
            onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[2]?.lay[0]?.price,
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
            className={`casino-odds-box lay ${
data[0]?.status === "OPEN" &&
data[0]?.runners[2]?.status === "ACTIVE"
? ""
: " suspended-box"
}`}>
              <span className="casino-odds">{data[0]?.runners[2]?.lay[0]?.price}</span>
              {/* <!-- suspended-box key0 > >status :  key0 >> runner2 >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
            <span
          className={`${
            zeroIndexTwoRunnersEx && zeroIndexTwoRunnersEx[0]?.pnl < 0
              ? "text-danger"
              : "text-success"
          }`}
        >
          {zeroIndexTwoRunnersEx ? zeroIndexTwoRunnersEx[0]?.pnl : null}
        </span>
            </div>
          </div>
            {/* Data [0] runners [3] */}
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              D.Dharam Veer
              <div className="casino-nation-book d-md-none"></div>
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
            className={`casino-odds-box back ${
data[0]?.status === "OPEN" &&
data[0]?.runners[3]?.status === "ACTIVE"
? ""
: " suspended-box"
} `}>
              <span className="casino-odds">{data[0]?.runners[3]?.back[0]?.price}</span>
              {/*  <!-- suspended-box key0 > >status :  key0 >> runner3 >> back >> price --> */}
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
            className={`casino-odds-box lay ${
data[0]?.status === "OPEN" &&
data[0]?.runners[3]?.status === "ACTIVE"
? ""
: " suspended-box"
} `}>
              <span className="casino-odds">{data[0]?.runners[3]?.lay[0]?.price}</span>
              {/*  <!-- suspended-box key0 > >status :  key0 >> runner3 >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
            <span
        className={`${
          zeroIndexThreeRunnersEx && zeroIndexThreeRunnersEx[0]?.pnl < 0
            ? "text-danger"
            : "text-success"
        }`}
      >
        {zeroIndexThreeRunnersEx ? zeroIndexThreeRunnersEx[0]?.pnl : null}
      </span>
            </div>
          </div>
               {/* Data [0] runners [4] */}
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              E.Kis Kis Ko Pyaar Karoon
              <div className="casino-nation-book d-md-none"></div>
            </div>
            <div 
             onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[4]?.back[0]?.price,
                side: 0,
                selectionId: data[0]?.runners[4]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                back: true,
                name: data[0]?.runners[4]?.name,
                isWeak: data[0]?.isWeak,
              });
            }} 
            className={`casino-odds-box back ${
data[0]?.status === "OPEN" &&
data[0]?.runners[4]?.status === "ACTIVE"
? ""
: " suspended-box"
} 
`}>
              <span className="casino-odds">{data[0]?.runners[4]?.back[0]?.price}</span>
              {/*  <!-- suspended-box key0 > >status :  key0 >> runner4 >> back >> price --> */}
            </div>
            <div
            
onClick={() => {
setShowBets(true);
setPlaceBetValue({});
setPlaceBetValue({
price: data[0]?.runners[4]?.lay[0]?.price,
side: 1,
selectionId: data[0]?.runners[4]?.id,
btype: data[0]?.btype,
eventTypeId: data[0]?.eventTypeId,
betDelay: data[0]?.betDelay,
marketId: data[0]?.id,
lay: true,
name: data[0]?.runners[4]?.name,
isWeak: data[0]?.isWeak,
});
}} 
             className={`casino-odds-box lay ${
data[0]?.status === "OPEN" &&
data[0]?.runners[4]?.status === "ACTIVE"
? ""
: " suspended-box"
} `}>
              <span className="casino-odds">{data[0]?.runners[4]?.lay[0]?.price}</span>
              {/*   <!-- suspended-box key0 > >status :  key0 >> runner4 >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
            <span
        className={`${
          zeroIndexFourRunnersEx && zeroIndexFourRunnersEx[0]?.pnl < 0
            ? "text-danger"
            : "text-success"
        }`}
      >
        {zeroIndexFourRunnersEx ? zeroIndexFourRunnersEx[0]?.pnl : null}
      </span>
            </div>
          </div> 
           {/* Data [0] runners [5] */}          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              F.Ghulam
              <div className="casino-nation-book d-md-none"></div>
            </div>
            <div 
            
onClick={() => {
setShowBets(true);
setPlaceBetValue({});
setPlaceBetValue({
price: data[0]?.runners[5]?.back[0]?.price,
side: 0,
selectionId: data[0]?.runners[5]?.id,
btype: data[0]?.btype,
eventTypeId: data[0]?.eventTypeId,
betDelay: data[0]?.betDelay,
marketId: data[0]?.id,
back: true,
name: data[0]?.runners[5]?.name,
isWeak: data[0]?.isWeak,
});
}} 
            className={`casino-odds-box back ${
data[0]?.status === "OPEN" &&
data[0]?.runners[5]?.status === "ACTIVE"
? ""
: " suspended-box"
} `}>
              <span className="casino-odds">{data[0]?.runners[5]?.back[0]?.price}</span>
              {/*  <!-- suspended-box key0 > >status :  key0 >> runner5 >> back >> price --> */}
            </div>
            <div
             onClick={() => {
              setShowBets(true);
              setPlaceBetValue({});
              setPlaceBetValue({
                price: data[0]?.runners[5]?.lay[0]?.price,
                side: 1,
                selectionId: data[0]?.runners[5]?.id,
                btype: data[0]?.btype,
                eventTypeId: data[0]?.eventTypeId,
                betDelay: data[0]?.betDelay,
                marketId: data[0]?.id,
                lay: true,
                name: data[0]?.runners[5]?.name,
                isWeak: data[0]?.isWeak,
              });
            }} 
            className={`casino-odds-box lay ${
data[0]?.status === "OPEN" &&
data[0]?.runners[5]?.status === "ACTIVE"
? ""
: " suspended-box"
} `}>
              <span className="casino-odds">{data[0]?.runners[6]?.lay[0]?.price}</span>
              {/* <!-- suspended-box key0 > >status :  key0 >> runner5 >> lay >> price --> */}
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100">
            <span
        className={`${
          zeroIndexFiveRunnersEx && zeroIndexFiveRunnersEx[0]?.pnl < 0
            ? "text-danger"
            : "text-success"
        }`}
      >
        {zeroIndexFiveRunnersEx ? zeroIndexFiveRunnersEx[0]?.pnl : null}
      </span>
            </div>
          </div>
        </div>

        {/*   <!-- key0 winner market end -->

        <!-- key1 odd market start --> */}

        <div className="casino-table-box mt-3">
          <div className="casino-table-left-box left-odd-box">
            <div className="casino-odd-box-container">
              <div className="casino-nation-name">
                Odd
                <div className="casino-nation-book text-danger d-md-none"></div>
              </div>
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
              className={`casino-odds-box back ${
data[1]?.status === "OPEN" &&
data[1]?.runners[0]?.status === "ACTIVE"
? ""
: " suspended-box"
} `}>
                {/* <!-- suspended-box key1 > >status :  key1 >> runner0 >> back >> price --> */}
                <span className="casino-odds">{data[1]?.runners[0]?.back[0]?.price}</span>
              </div>
              <div 
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[1]?.runners[0]?.lay[0]?.price,
                  side: 1,
                  selectionId: data[1]?.runners[0]?.id,
                  btype: data[1]?.btype,
                  eventTypeId: data[1]?.eventTypeId,
                  betDelay: data[1]?.betDelay,
                  marketId: data[1]?.id,
                  lay: true,
                  name: data[1]?.runners[0]?.name,
                  isWeak: data[1]?.isWeak,
                });
              }} 
              className={`casino-odds-box lay ${
data[1]?.status === "OPEN" &&
data[1]?.runners[0]?.status === "ACTIVE"
? ""
: " suspended-box"
} `}>
                <span className="casino-odds">{data[1]?.runners[0]?.lay[0]?.price}</span>
                {/* <!-- suspended-box key1 > >status :  key1 >> runner1 >> back >> price --> */}
              </div>
              <div className="casino-nation-book text-center d-none d-md-block w-100">
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
          </div>

          {/* <!-- key1 odd market end -->






















          <!-- key2 dulha dulhan barati market start --> */}

          <div className="casino-table-right-box right-odd-box">
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">{data[2]?.runners[0]?.back[0]?.price}</div>
              {/*  <!-- suspended-box key2 > >status :  key2 >> runner0 >> back >> price --> */}
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[2]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[2]?.runners[0]?.id,
                  btype: data[2]?.btype,
                  eventTypeId: data[2]?.eventTypeId,
                  betDelay: data[2]?.betDelay,
                  marketId: data[2]?.id,
                  back: true,
                  name: data[2]?.runners[0]?.name,
                  isWeak: data[2]?.isWeak,
                });
              }} 
              className={`casino-odds-box back casino-odds-box-theme ${
data[2]?.status === "OPEN" &&
data[2]?.runners[0]?.status === "ACTIVE"
? ""
: " suspended-box"
}`}>
                <span className="casino-odds">Dulha Dulhan K-Q</span>
              </div>
              <div className="casino-nation-book text-center">
              <span
        className={`${
          redExposure &&  redExposure[0]?.pnl < 0
            ? "text-danger"
            : "text-success"
        }`}
      >
        { redExposure ?  redExposure[0]?.pnl : null}
      </span>
              </div>
            </div>
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">{data[2]?.runners[1]?.back[0]?.price}</div>
              {/* <!-- suspended-box key2 > >status :  key2 >> runner1 >> back >> price --> */}
              <div 
                onClick={() => {
                  setShowBets(true);
                  setPlaceBetValue({});
                  setPlaceBetValue({
                    price: data[2]?.runners[1]?.back[0]?.price,
                    side: 0,
                    selectionId: data[2]?.runners[1]?.id,
                    btype: data[2]?.btype,
                    eventTypeId: data[2]?.eventTypeId,
                    betDelay: data[2]?.betDelay,
                    marketId: data[2]?.id,
                    back: true,
                    name: data[2]?.runners[1]?.name,
                    isWeak: data[2]?.isWeak,
                  });
                }} 
              className={`casino-odds-box back casino-odds-box-theme ${
                data[2]?.status === "OPEN" &&
                data[2]?.runners[1]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                <span className="casino-odds">Barati J-A</span>
              </div>
              <div className="casino-nation-book text-center">
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
          </div>
        </div>

        {/* <!-- key2 dulha dulhan barati market end -->


        <!-- key3 color market start --> */}
        <div className="casino-table-box mt-3">
          <div className="casino-table-left-box">
            <div className="aaa-odd-box">
              <div className="casino-odds text-center">{data[3]?.runners[0]?.back[0]?.price}</div>
              {/* <!-- key3 >> runner0 >> back >> price --> */}
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[3]?.runners[0]?.back[0]?.price,
                  side: 0,
                  selectionId: data[3]?.runners[0]?.id,
                  btype: data[3]?.btype,
                  eventTypeId: data[3]?.eventTypeId,
                  betDelay: data[3]?.betDelay,
                  marketId: data[3]?.id,
                  back: true,
                  name: data[3]?.runners[0]?.name,
                  isWeak: data[3]?.isWeak,
                });
              }} 
              className={`casino-odds-box back casino-odds-box-theme ${
data[3]?.status === "OPEN" &&
data[3]?.runners[0]?.status === "ACTIVE"
? ""
: " suspended-box"
}`}>
                {/*   <!-- suspended-box :  key3 status --> */}
                <div className="casino-odds">
                  <span className="card-icon ms-1">
                    <span className="card-red"></span>
                  </span>
                  <span className="card-icon ms-1">
                    <span className="card-red"></span>
                  </span>
                </div>
              </div>
              <div className="casino-nation-book text-center">
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
            <div
            
            className="aaa-odd-box">
              <div className="casino-odds text-center">{data[3]?.runners[1]?.back[0]?.price}</div>
              {/*   <!--  key3 >> runner1 >> back >> price --> */}
              <div
               onClick={() => {
                setShowBets(true);
                setPlaceBetValue({});
                setPlaceBetValue({
                  price: data[3]?.runners[1]?.back[0]?.price,
                  side: 0,
                  selectionId: data[3]?.runners[1]?.id,
                  btype: data[3]?.btype,
                  eventTypeId: data[3]?.eventTypeId,
                  betDelay: data[3]?.betDelay,
                  marketId: data[3]?.id,
                  back: true,
                  name: data[3]?.runners[1]?.name,
                  isWeak: data[3]?.isWeak,
                });
              }} 
              className={`casino-odds-box back casino-odds-box-theme ${
                data[3]?.status === "OPEN" &&
                data[3]?.runners[0]?.status === "ACTIVE"
                  ? ""
                  : " suspended-box"
              }`}>
                {/* <!-- suspended-box :  key3 status --> */}
                <div className="casino-odds">
                  <span className="card-icon ms-1">
                    <span className="card-black"></span>
                  </span>
                  <span className="card-icon ms-1">
                    <span className="card-black"></span>
                  </span>
                </div>
              </div>
              <div className="casino-nation-book text-center">
              <span
        className={`${
          four56Exposure &&  four56Exposure[0]?.pnl < 0
            ? "text-danger"
            : "text-success"
        }`}
      >
        { four56Exposure ?  four56Exposure[0]?.pnl : null}
      </span>
              </div>
            </div>
          </div>

          {/*  <!-- key3 color market end -->

          <!-- key4 card market start --> */}

          <div className="casino-table-right-box right-cards">
            <h4 className="w-100 text-center mb-2">
              <b>{data[4]?.runners[0]?.back[0]?.price}</b>
            </h4>
            {/* <!-- key4 >> runner 0 >> back >> price --> */}

           
             {data[4]?.runners?.map((runner, i) => {
  const pnl = pnlBySelection?.filter(
    (pnl) => pnl?.RunnerId === runner?.id
  );

  return (
    <div key={i} className="card-odd-box">
      <div
        onClick={() => {
          setShowBets(true);
          setPlaceBetValue({});
          setPlaceBetValue({
            price: runner?.back[0]?.price,
            side: 0,
            selectionId: runner?.id,
            btype: data[4]?.btype,
            eventTypeId: data[4]?.eventTypeId,
            betDelay: data[4]?.betDelay,
            marketId: data[4]?.id,
            back: true,
            name: runner?.name,
            isWeak: data[4]?.isWeak,
          });
        }}
        className={`${
          data[4]?.status === "OPEN" && runner?.status === "ACTIVE"
            ? ""
            : "suspended-box"
        }`}
      >
        {/* <!-- suspended-box --> */}
        <img src={`/cards/${runner?.name}.png`} />
      </div>

      {pnl && (
        <div className="casino-nation-book">
          {pnl?.map(({ pnl }, i) => {
            return (
              <span
                key={i}
                className={`${
                  pnl > 0 ? "text-success" : "text-danger"
                }`}
                style={{
                  cursor: "pointer",
                }}
              >
          
                {pnl}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
})}
          </div>
        </div>
      </div>
    );
};

export default Bollywood;









// {/* 
// <div className="flip-card">
// <div className="flip-card-inner">
//   {data[0]?.indexCard?.length > 0 ? (
//     <div className="flip-card-front">
//       <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   ) : (
//     <div className="flip-card-front">
//       <img src={one} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   )}
// </div>
// </div>
// <div className="flip-card">
// <div className="flip-card-inner">
//   {data[0]?.indexCard?.length > 1 ? (
//     <div className="flip-card-front">
//       <img src={`/cards/${data[0]?.indexCard[1]}.jpg`} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   ) : (
//     <div className="flip-card-front">
//       <img src={one} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   )}
// </div>
// </div>
// <div className="flip-card">
// <div className="flip-card-inner">
//   {data[0]?.indexCard?.length > 2 ? (
//     <div className="flip-card-front">
//       <img src={`/cards/${data[0]?.indexCard[2]}.jpg`} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   ) : (
//     <div className="flip-card-front">
//       <img src={one} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   )}
// </div>
// </div>
// <div className="flip-card">
// <div className="flip-card-inner">
//   {data[0]?.indexCard?.length > 3 ? (
//     <div className="flip-card-front">
//       <img src={`/cards/${data[0]?.indexCard[3]}.jpg`} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   ) : (
//     <div className="flip-card-front">
//       <img src={one} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   )}
// </div>
// </div>
// <div className="flip-card">
// <div className="flip-card-inner">
//   {data[0]?.indexCard?.length > 4 ? (
//     <div className="flip-card-front">
//       <img src={`/cards/${data[0]?.indexCard[4]}.jpg`} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   ) : (
//     <div className="flip-card-front">
//       <img src={one} />
//       {/*    <!-- key0 >> indexCard0 --> */}
//     </div>
//   )}
// </div>
// </div>

//   */}