export const handleSportsBookPlaceBet = (
  column,
  item,
  sportsBook,
  token,
  setPlaceBetValue,
  navigate,
  setShowBets
) => {
  if (token) {
    if (item?.Status === 1 || item?.Status) {
      if (column?.IsActive === 1 || column?.IsActive) {
        setPlaceBetValue({});

        setPlaceBetValue({
          price: column?.Price?.toFixed(2),
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
        });
        setShowBets(true);
      }
    }
  } else {
    navigate("/login");
  }
};
