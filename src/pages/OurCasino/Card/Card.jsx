const Card = ({ slug, data, one }) => {
  return (
    <>
      {/* <!-- card html start --> */}
      <div className="flip-card-container">
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
      slug == "teen32" ? (
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
    </>
  );
};

export default Card;
