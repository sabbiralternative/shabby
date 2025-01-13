import { useEffect, useState } from "react";
/* Virtual amar akabar anthony */
const amarArr = ["1", "2", "3", "4", "5", "6"];
const akbarArr = ["7", "8", "9", "10"];
const anthonyArr = ["11", "12", "13"];
/* Virtual Bollywood */
const donArr = ["C1"];
const amarAkbarAnthonyArr = ["H1", "D1", "C1"];
const sahibBibiArr = ["S13", "S12", "S11"];
const dharamVeerArr = ["D13", "C13"];
const kkpkArr = ["H13", "C12", "D12", "H12"];
const gulamArr = ["H11", "C11", "D11"];

const Card = ({ slug, data, one }) => {
  /* Virtual amar akabar anthony */
  const [amar, setAmar] = useState(false);
  const [akbar, setAkbar] = useState(false);
  const [anthony, setAnthony] = useState(false);
  /* Virtul Bollywood games */
  const [don, setDon] = useState(false);
  const [amarAkbarAnthony, setAmarAkbarAnthony] = useState(false);
  const [sahibBibi, setSahibBibi] = useState(false);
  const [dharamVeer, setDharamVeer] = useState(false);
  const [kkpk, setKkpk] = useState(false);
  const [gulam, setGulam] = useState(false);

  useEffect(() => {
    if (
      data &&
      data[0] &&
      data[0]?.indexCard &&
      data[0]?.eventName == "Amar Akbar Anthony" &&
      data[0]?.indexCard?.length > 0
    ) {
      if (
        amarArr.includes(data[0]?.indexCard[0].split("").slice([1]).join(""))
      ) {
        setAmar(true);
        setAnthony(false);
        setAkbar(false);
      } else if (
        akbarArr.includes(data[0]?.indexCard[0].split("").slice([1]).join(""))
      ) {
        setAmar(false);
        setAnthony(false);
        setAkbar(true);
      } else if (
        anthonyArr.includes(data[0]?.indexCard[0].split("").slice([1]).join(""))
      ) {
        setAmar(false);
        setAnthony(true);
        setAkbar(false);
      } else {
        setAmar(false);
        setAnthony(false);
        setAkbar(false);
      }
    } else {
      setAmar(false);
      setAnthony(false);
      setAkbar(false);
    }
  }, [data]);

  useEffect(() => {
    if (
      data &&
      data[0] &&
      data[0]?.indexCard &&
      data[0]?.eventName == "Bollywood Casino" &&
      data[0]?.indexCard?.length > 0
    ) {
      if (donArr.includes(data[0]?.indexCard[0])) {
        setDon(true);
        setAmarAkbarAnthony(false);
        setSahibBibi(false);
        setDharamVeer(false);
        setKkpk(false);
        setGulam(false);
      } else if (amarAkbarAnthonyArr.includes(data[0]?.indexCard[0])) {
        setDon(false);
        setAmarAkbarAnthony(true);
        setSahibBibi(false);
        setDharamVeer(false);
        setKkpk(false);
        setGulam(false);
      } else if (sahibBibiArr.includes(data[0]?.indexCard[0])) {
        setDon(false);
        setAmarAkbarAnthony(false);
        setSahibBibi(true);
        setDharamVeer(false);
        setKkpk(false);
        setGulam(false);
      } else if (dharamVeerArr.includes(data[0]?.indexCard[0])) {
        setDon(false);
        setAmarAkbarAnthony(false);
        setSahibBibi(false);
        setDharamVeer(true);
        setKkpk(false);
        setGulam(false);
      } else if (kkpkArr.includes(data[0]?.indexCard[0])) {
        setDon(false);
        setAmarAkbarAnthony(false);
        setSahibBibi(false);
        setDharamVeer(false);
        setKkpk(true);
        setGulam(false);
      } else if (gulamArr.includes(data[0]?.indexCard[0])) {
        setDon(false);
        setAmarAkbarAnthony(false);
        setSahibBibi(false);
        setDharamVeer(false);
        setKkpk(false);
        setGulam(true);
      } else {
        setDon(false);
        setAmarAkbarAnthony(false);
        setSahibBibi(false);
        setDharamVeer(false);
        setKkpk(false);
        setGulam(false);
      }
    } else {
      setDon(false);
      setAmarAkbarAnthony(false);
      setSahibBibi(false);
      setDharamVeer(false);
      setKkpk(false);
      setGulam(false);
    }
  }, [data]);

  return (
    <>
      {/* <!-- card html start --> */}
      <div className={`${slug !== "vbtable" ? "flip-card-container" : ""}`}>
        {slug == "dt202" || slug == "dt20" || slug == "dt6" ? (
          <>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.runners[0]?.card[0]?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`} />
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.runners[1]?.card[0]?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`} />
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                  </div>
                )}
              </div>
            </div>
          </>
        ) : null}
        {/* <!-- card html start --> */}
        {slug === "btable" ||
        slug === "btable2" ||
        slug == "aaa2" ||
        slug == "lucky7eu" ||
        slug == "lucky7eu2" ||
        slug == "lucky7" ||
        slug == "aaa" ? (
          <div className="flip-card">
            <div className="flip-card-inner">
              {data[0]?.indexCard?.length === 0 ? (
                <div className="flip-card-front">
                  <img src={one} />
                </div>
              ) : (
                <div className="flip-card-front">
                  <img
                    src={`/cards/${data[0]?.indexCard[0]}.jpg`}
                    alt={`Card`}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {/* <!-- card html start --> */}
        {slug == "dtl20" ? (
          <>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.runners[0]?.card?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.runners[1]?.card?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.runners[2]?.card?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.runners[2]?.card[0]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : null}

        {slug == "teen1" || slug == "teen120" ? (
          <div>
            <div>
              <h5>Player</h5>
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="flip-card-inner ">
                    {data[0]?.runners[0]?.card?.length > 0 ? (
                      <div className="flip-card-front">
                        <img
                          src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`}
                        />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <h5>Dealer</h5>
              <div className="flip-card-container mt-1">
                <div className="flip-card">
                  <div className="flip-card-inner ">
                    {data[0]?.runners[1]?.card?.length > 0 ? (
                      <div className="flip-card-front">
                        <img
                          src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`}
                        />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {slug == "teen" ||
      slug == "teen20" ||
      slug == "teen3" ||
      slug == "teen32" ||
      slug == "teenmuf" ||
      slug === "teen41" ||
      slug === "teen42" ||
      slug === "teen33" ? (
        <>
          <div className="">
            <h5 className="">Player A</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <h5 className="">Player B</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {slug === "vlucky7" && (
        <div>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-inner flip">
                <div className="flip-card-back">
                  {data[0]?.indexCard?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                      {/*    <!-- key0 >> indexCard0 --> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*    <!-- key0 >> indexCard0 --> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {slug === "vaaa" && (
        <div className="casino-video-cards">
          <div className="vcasinocards-playera">
            <h5 className="text-center">Amar</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {amar && (
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vcasinocards-playerb">
            <h5 className="text-center">Akbar</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {akbar && (
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vcasinocards-playerc">
            <h5 className="text-center">Anthony</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {anthony && (
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "vteen20" && (
        <>
          <div className="vcasinocards-playera">
            <h5 className="text-center">Player A</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="vcasinocards-playerb">
            <h5 className="text-center">Player B</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {slug === "vteenmuf" && (
        <>
          <div className="vcasinocards-playera">
            <h5 className="text-center">Player A</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="vcasinocards-playerb">
            <h5 className="text-center">Player B</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {slug === "poker" ? (
        <>
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <h5>Player A</h5>
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {data[0]?.runners[0]?.card?.length > 0 &&
                    data[0]?.runners[0]?.card[0] !== "" ? (
                      <div className="flip-card-front">
                        <img
                          src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`}
                        />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {data[0]?.runners[0]?.card?.length > 1 &&
                    data[0]?.runners[0]?.card[1] !== "" ? (
                      <div className="flip-card-front">
                        <img
                          src={`/cards/${data[0]?.runners[0]?.card[1]}.jpg`}
                        />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5>Player B</h5>
              <div className="flip-card-container justify-content-end">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {data[0]?.runners[1]?.card?.length > 0 &&
                    data[0]?.runners[1]?.card[0] !== "" ? (
                      <div className="flip-card-front">
                        <img
                          src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`}
                        />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {data[0]?.runners[1]?.card?.length > 1 &&
                    data[0]?.runners[1]?.card[1] !== "" ? (
                      <div className="flip-card-front">
                        <img
                          src={`/cards/${data[0]?.runners[1]?.card[1]}.jpg`}
                        />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <h5>Board</h5>
            <div className="flip-card-container">
              {data[0]?.indexCard?.map((card, i) => {
                return (
                  <div key={i} className="flip-card">
                    <div className="flip-card-inner">
                      {card[i] && card !== "" ? (
                        <div className="flip-card-front">
                          <img src={`/cards/${card}.jpg`} />
                          {/*    <!-- key0 >> indexCard0 --> */}
                        </div>
                      ) : (
                        <div className="flip-card-front">
                          <img src={one} />
                          {/*    <!-- key0 >> indexCard0 --> */}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
      {slug === "poker20" ? (
        <>
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <h5>Player A</h5>
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {data[0]?.playeraCard?.length > 0 &&
                    data[0]?.playeraCard[0] !== "" ? (
                      <div className="flip-card-front">
                        <img src={`/cards/${data[0]?.playeraCard[0]}.jpg`} />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {data[0]?.playeraCard?.length > 1 &&
                    data[0]?.playeraCard[1] !== "" ? (
                      <div className="flip-card-front">
                        <img src={`/cards/${data[0]?.playeraCard[1]}.jpg`} />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5>Player B</h5>
              <div className="flip-card-container justify-content-end">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {data[0]?.playerbCard?.length > 0 &&
                    data[0]?.playerbCard[0] !== "" ? (
                      <div className="flip-card-front">
                        <img src={`/cards/${data[0]?.playerbCard[0]}.jpg`} />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {data[0]?.playerbCard?.length > 1 &&
                    data[0]?.playerbCard[1] !== "" ? (
                      <div className="flip-card-front">
                        <img src={`/cards/${data[0]?.playerbCard[1]}.jpg`} />
                        {/* <!-- key0 runner2 card--> */}
                      </div>
                    ) : (
                      <div className="flip-card-front">
                        <img src={one} />
                        {/*     <!-- key0 runner2 card--> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <h5>Board</h5>
            <div className="flip-card-container">
              {data[0]?.indexCard?.map((card, i) => {
                return (
                  <div key={i} className="flip-card">
                    <div className="flip-card-inner">
                      {card[i] && card !== "" ? (
                        <div className="flip-card-front">
                          <img src={`/cards/${card}.jpg`} />
                          {/*    <!-- key0 >> indexCard0 --> */}
                        </div>
                      ) : (
                        <div className="flip-card-front">
                          <img src={one} />
                          {/*    <!-- key0 >> indexCard0 --> */}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : null}

      {slug === "poker6" && (
        <div>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 1 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[1]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 2 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[2]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 3 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[3]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 4 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[4]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {slug === "vbtable" && (
        <>
          <div className="ggfgfgg">
            <h5 className="text-center">A</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {don && <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-center">B</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {amarAkbarAnthony && (
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-center">C</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {sahibBibi && (
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-center">D</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {dharamVeer && (
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-center">E</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {kkpk && (
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h5 className="text-center">F</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {gulam && (
                      <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {slug == "teen9" && (
        <>
          <div className="">
            <h5>Tiger</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[0]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[0]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <h5>Lion</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[1]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[1]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <h5>Dragon</h5>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[2]?.card?.length > 0 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[2]?.card[0]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[2]?.card?.length > 1 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[2]?.card[1]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {data[0]?.runners[2]?.card?.length > 2 ? (
                    <div className="flip-card-front">
                      <img src={`/cards/${data[0]?.runners[2]?.card[2]}.jpg`} />
                      {/* <!-- key0 runner2 card--> */}
                    </div>
                  ) : (
                    <div className="flip-card-front">
                      <img src={one} />
                      {/*     <!-- key0 runner2 card--> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {slug === "teen8" && (
        <div className="">
          <h5>Dealer</h5>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 1 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[1]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 2 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[2]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {slug == "worli" || slug == "worli2" ? (
        <div className="">
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 1 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[1]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 2 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[2]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {slug == "war" && (
        <div className="">
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                {data[0]?.indexCard?.length > 0 ? (
                  <div className="flip-card-front">
                    <img src={`/cards/${data[0]?.indexCard[0]}.jpg`} />
                    {/* <!-- key0 runner2 card--> */}
                  </div>
                ) : (
                  <div className="flip-card-front">
                    <img src={one} />
                    {/*     <!-- key0 runner2 card--> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {slug == "race20" ? (
        <>
          <div className="race-total-point">
            <div className="text-white">
              <div>Cards</div>
              <div>{data[0]?.totalCards}</div>
              {/*   <!-- result0 >> totalCards --> */}
            </div>
            <div className="text-white">
              <div>Points</div>
              <div>{data[0]?.totalPoints}</div>
              {/*  <!-- result0 >> totalPoints --> */}
            </div>
          </div>
          <div>
            <div className="flip-card-container">
              {data[0]?.runners[0]?.card?.map((img, i) => {
                return (
                  <div key={i} className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={`/public/cards/${img}.jpg`} />
                        {/*   <!-- result0 >> runners0 >> card0 --> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-1">
            <div className="flip-card-container">
              {data[0]?.runners[1]?.card?.map((img, i) => {
                return (
                  <div key={i} className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={`/public/cards/${img}.jpg`} />
                        {/*   <!-- result0 >> runners0 >> card0 --> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-1">
            <div className="flip-card-container">
              {data[0]?.runners[2]?.card?.map((img, i) => {
                return (
                  <div key={i} className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={`/public/cards/${img}.jpg`} />
                        {/*   <!-- result0 >> runners0 >> card0 --> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-1">
            <div className="flip-card-container">
              {data[0]?.runners[3]?.card?.map((img, i) => {
                return (
                  <div key={i} className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={`/public/cards/${img}.jpg`} />
                        {/*   <!-- result0 >> runners0 >> card0 --> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : null}

      {slug == "card32" || slug == "card32eu" ? (
        <>
          {data[0]?.runners?.map((runner, i) => {
            return (
              <div key={i}>
                {runner?.card?.length > 0 && (
                  <h5 className="">
                    {runner?.name}:{" "}
                    <span className="text-warning">{runner.total}</span>
                  </h5>
                )}
                <div className="flip-card-container">
                  {runner?.card?.map((image, i) => {
                    return (
                      <div key={i} className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <img src={`/public/cards/${image}.jpg`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      ) : null}

      {slug == "teensin" || slug == "teen6" ? (
        <div className="">
          {data?.slice(0, slug == "teensin" ? 2 : 1).map((game, idx) =>
            game?.runners?.map((runner, i) => {
              return (
                <div className={`${idx === 1 ? "mt-1" : ""}`} key={i}>
                  <h5>{runner?.name}</h5>
                  <div className="flip-card-container">
                    {runner?.card?.map((image, i) => {
                      return (
                        <div key={i} className="flip-card">
                          <div className="flip-card-inner ">
                            <div className="flip-card-front">
                              <img key={i} src={`/cards/${image}.jpg`} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : null}
    </>
  );
};

export default Card;
