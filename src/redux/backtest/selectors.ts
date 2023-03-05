import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectBacktests = (state: RootState) => state.backtest;

export const selectPNL = createSelector(
  (state: RootState) => state.backtest,
  (backtest) => {
    let pnl = 0;
    backtest.forEach((item) => {
      if (item.result === "success") {
        pnl += Math.abs(((item.tp - item.entry) * 100) / item.entry);
      } else {
        pnl -= Math.abs(((item.sl - item.entry) * 100) / item.entry);
      }
    });

    return pnl.toFixed(2);
  }
);

export const selectWinrate = createSelector(
  (state: RootState) => state.backtest,
  (backtest) => {
    const wins = backtest.filter((item) => item.result === "success");
    return (wins.length * 100) / backtest.length;
  }
);

export const selectWinsAndFailsAmount = createSelector(
  (state: RootState) => state.backtest,
  (backtest) => {
    const wins = backtest.filter((item) => item.result === "success");
    const fails = backtest.filter((item) => item.result === "failure");

    return {
      wins: wins.length,
      fails: fails.length,
    };
  }
);
