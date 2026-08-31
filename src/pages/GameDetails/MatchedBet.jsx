import { useParams } from "react-router-dom";
import useSBCashOut from "../../hooks/sb_cashout";
import toast from "react-hot-toast";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../constant";

const MatchedBet = ({ myBets, refetchCurrentBets, sportsBook }) => {
  const { getLanguage } = useLanguage();
  const { id, eventId } = useParams();
  const { mutate: cashOut } = useSBCashOut();

  const sports =
    sportsBook &&
    sportsBook?.MarketGroups?.filter(
      (group) =>
        group?.Name !== "Bet Builder" &&
        group?.Name !== "Fast Markets" &&
        group?.Name !== "Player Specials",
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
      (col) => col?.Id === betHistory?.selectionId,
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
    <div className="table-responsive w-100">
      <table className="table">
        <thead>
          <tr>
            <th>{getLanguage(LanguageKey.MATCHED_BETS)}</th>
            <th className="text-end"></th>
            <th className="text-end">{getLanguage(LanguageKey.ODDS)}</th>
            <th className="text-end">{getLanguage(LanguageKey.STAKE)}</th>
          </tr>
        </thead>
        {myBets.length > 0 && Array.isArray(myBets) && (
          <tbody>
            {myBets?.map((bet, i) => {
              let column;
              sports?.forEach((group) => {
                group?.Items?.forEach((data) => {
                  if (bet?.marketId == data?.Id) {
                    column = data?.Items?.find(
                      (col) => col?.Id === bet?.selectionId,
                    );
                  }
                });
              });

              const price = (
                0.92 * bet?.amount * (bet?.userRate / column?.Price) -
                bet?.amount
              )?.toFixed(2);
              return (
                <tr
                  key={i}
                  className={`${bet?.betType === "Lay" ? "lay" : "back"}`}
                >
                  <td>{bet?.nation}</td>
                  <td className="text-end">
                    {" "}
                    {bet?.cashout && eventId && id && column && (
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
                          {getLanguage(LanguageKey.CASHOUT)}
                        </span>
                        {price && (
                          <span style={{ color: "black", fontSize: "10px" }}>
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
  );
};

export default MatchedBet;
