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
          pnl *= Math.abs((item.exit - item.entry) / item.entry) + 1;
        } else {
          pnl -= Math.abs((item.exit - item.entry) / item.entry) * pnl;
        }
      } else {
        const changedPercent = Math.abs(
          ((item.exit - item.entry) * 100) / item.entry
        );
        item.result === "success"
          ? (pnl += changedPercent)
          : (pnl -= changedPercent);
      }
    });

    return isCompound ? ((pnl - 1) * 100).toFixed(2) : (pnl - 1).toFixed(2);
  }
);

export const selectPNLs = createSelector(
  [selectBacktests, (_, isCompound: boolean) => isCompound],
  (backtest, isCompound) => {
    let pnl = 1;
    let pnlArray: string[] = []
    backtest.forEach((item) => {
      if (isCompound) {
        if (item.result === "success") {
          pnl *= Math.abs((item.exit - item.entry) / item.entry) + 1;
        } else {
          pnl -= Math.abs((item.exit - item.entry) / item.entry) * pnl;
        }
      } else {
        const changedPercent = Math.abs(
          ((item.exit - item.entry) * 100) / item.entry
        );
        item.result === "success"
          ? (pnl += changedPercent)
          : (pnl -= changedPercent);
      }
      const pnlToPush = isCompound ? ((pnl - 1) * 100).toFixed(2) : (pnl - 1).toFixed(2);
      pnlArray.push(pnlToPush)
    });

    return pnlArray
  }
)

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
