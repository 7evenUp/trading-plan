import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectBacktests = (state: RootState) => state.backtest;

export const selectPNL = createSelector(
  [selectBacktests, (_, isCompound: boolean) => isCompound],
  (backtest, isCompound) => {
    let pnl = 1;
    backtest.forEach((item) => {
      if (isCompound) {
        if (item.result === "success") {
          pnl *= Math.abs((item.tp - item.entry) / item.entry) + 1;
        } else {
          pnl -= Math.abs((item.sl - item.entry) / item.entry) * pnl;
        }
      } else {
        if (item.result === "success") {
          pnl += Math.abs(((item.tp - item.entry) * 100) / item.entry);
        } else {
          pnl -= Math.abs(((item.sl - item.entry) * 100) / item.entry);
        }
      }
    });

    return isCompound ? ((pnl - 1) * 100).toFixed(2) : (pnl - 1).toFixed(2);
  }
);

export const selectWinrate = createSelector(selectBacktests, (backtest) => {
  const wins = backtest.filter((item) => item.result === "success");
  return (wins.length * 100) / backtest.length;
});

export const selectWinsAndFailsAmount = createSelector(
  selectBacktests,
  (backtest) => {
    const wins = backtest.filter((item) => item.result === "success");
    const fails = backtest.filter((item) => item.result === "failure");

    return {
      wins: wins.length,
      fails: fails.length,
    };
  }
);
