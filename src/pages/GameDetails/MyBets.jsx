import toast from "react-hot-toast";
import useSBCashOut from "../../hooks/sb_cashout";
import { useParams } from "react-router-dom";

const MyBets = ({ myBets, sportsBook, refetchCurrentBets }) => {
  const { id, eventId } = useParams();
  const { mutate: cashOut } = useSBCashOut();

  const sports =
    sportsBook &&
    sportsBook?.MarketGroups?.filter(
      (group) =>
        group?.Name !== "Bet Builder" &&
        group?.Name !== "Fast Markets" &&
        group?.Name !== "Player Specials"
    );

  const handleCashOut = ({ betHistory, sportsBook, price, cashout_value }) => {
    let item;
    sports?.forEach((group) => {
      group?.Items?.forEach((data) => {
        if (betHistory?.marketId == data?.Id) {
          item = data;
        }
      });
    });

    const column = item?.Items?.find(
      (col) => col?.Id === betHistory?.selectionId
    );

    const payload = {
      price,
      cashout_value,
      back: true,
      side: 0,
      selectionId: column?.Id,
      btype: "SPORTSBOOK",
      placeName: column?.Name,
      eventTypeId: sportsBook?.EventTypeId,
      betDelay: sportsBook?.betDelay,
      marketId: item?.Id,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      isBettable: sportsBook?.isBettable,
      isWeak: sportsBook?.isWeak,
      marketName: item?.Name,
      eventId: sportsBook?.eventId,
      betId: betHistory?.betId,
    };

    cashOut(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetchCurrentBets();
          toast.success(data?.result?.message);
        } else {
          toast.error(data?.error);
        }
      },
    });
  };
  return (
    <div className="sidebar-box my-bet-container">
      <div className="sidebar-title">
        <h4>My Bet</h4>
      </div>
      <div className="my-bets">
        <div className="table-responsive w-100">
          <table className="table">
            <thead>
              <tr>
                <th>Matched Bet</th>
                <th className="text-end"></th>
                <th className="text-end">Odds</th>
                <th className="text-end">Stake</th>
              </tr>
            </thead>
            {myBets?.length > 0 && Array.isArray(myBets) && (
              <tbody>
                {myBets?.map((bet, i) => {
                  let column;
                  sports?.forEach((group) => {
                    group?.Items?.forEach((data) => {
                      if (bet?.marketId == data?.Id) {
                        column = data?.Items?.find(
                          (col) => col?.Id === bet?.selectionId
                        );
                      }
                    });
                  });

                  const price = (
                    0.92 *
                    bet?.amount *
                    (bet?.userRate / column?.Price)
                  )?.toFixed(2);
                  return (
                    <tr
                      key={i}
                      className={`${bet?.betType === "Lay" ? "lay" : "back"}`}
                    >
                      <td>{bet?.nation}</td>
                      <td className="text-end">
                        {" "}
                        {bet?.cashout && eventId && id && (
                          <button
                            onClick={() =>
                              handleCashOut({
                                betHistory: bet,
                                sportsBook,
                                price: column?.Price,
                                cashout_value: price,
                              })
                            }
                            type="button"
                            className="btn_box "
                            style={{
                              width: "auto",
                              backgroundColor: "#f3f3f3ff",
                              display: "flex",
                              alignItems: "center",
                              cursor: `pointer`,
                              justifyContent: "center",
                              gap: "0px 2px",
                              borderRadius: "2px",
                              border: "none",
                              padding: "3px 5px",
                            }}
                          >
                            <span style={{ fontSize: "10px", color: "black" }}>
                              Cashout
                            </span>
                            {price && (
                              <span
                                style={{ color: "black", fontSize: "10px" }}
                              >
                                :
                              </span>
                            )}

                            {price && (
                              <span
                                style={{
                                  color: `${price > 0 ? "green" : "red"}`,
                                  fontSize: "10px",
                                }}
                              >
                                {price}
                              </span>
                            )}
                          </button>
                        )}
                      </td>
                      <td className="text-end">{bet?.userRate}</td>
                      <td className="text-end">{bet?.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBets;
