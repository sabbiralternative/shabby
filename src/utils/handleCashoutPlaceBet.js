const handleCashoutPlaceBet = (
  games,
  betType,
  setTotalSize,
  setShowBets,
  setPlaceBetValue,
  pnlBySelection,
  token,
  navigate,
  team
) => {
  if (token) {
    // games?.status === "OPEN" && team?.runner?.status === "OPEN"
    if (token) {
      if (team && team?.profit === 0) {
        return;
      }
      const updatedPnl = [];
      games?.runners?.forEach((rnr) => {
        const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
        if (pnl) {
          updatedPnl.push({
            exposure: pnl?.pnl,
            id: pnl?.RunnerId,
            isBettingOnThisRunner: rnr?.id === team?.runner?.id,
            name: rnr?.name,
            updatedExposure: pnl?.pnl,
          });
        } else {
          updatedPnl.push({
            exposure: 0,
            id: rnr?.id,
            isBettingOnThisRunner: rnr?.id === team?.runner?.id,
            name: rnr?.name,
          });
        }
      });

      setTotalSize("");
      setShowBets(true);
      setPlaceBetValue({});
      setPlaceBetValue({
        price:
          betType === "back"
            ? team?.runner?.back[0].price
            : team?.runner?.lay[0].price,
        side: betType === "back" ? 0 : 1,
        selectionId: team?.runner?.id,
        btype: games?.btype,
        eventTypeId: games?.eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        name: games.runners.map((runner) => runner.name),
        runnerId: games.runners.map((runner) => runner.id),
        selectedBetName: team?.runner?.name,
        exposure: updatedPnl,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        totalSize: team?.newStakeValue,
        cashout: true,
      });
    }
  } else {
    navigate("/login");
  }
};

export default handleCashoutPlaceBet;
