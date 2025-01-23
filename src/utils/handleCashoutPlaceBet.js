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
      games?.runners?.forEach((runner) => {
        const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
        if (pnl) {
          updatedPnl.push(pnl?.pnl);
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
        pnl: updatedPnl,
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
