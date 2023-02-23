import { createSelector } from "reselect";
import { Plan } from "./planSlice";
import { RootState } from "./store";

export const selectPlanById = createSelector(
  [(state: RootState) => state.plans, (_, id: string) => id],
  (plans, id) => plans.find((plan) => plan.id === id) as Plan
);

export const selectPNLPerDay = createSelector(
  [selectPlanById, (_, __, totalTradingDays: number) => totalTradingDays],
  (plan, totalTradingDays) => (plan.goal / totalTradingDays).toFixed(2)
);

export const selectTradesPerDay = createSelector(
  [selectPlanById, (_, __, dailyPNLNeeded: number) => dailyPNLNeeded],
  (plan, dailyPNLNeeded) => {
    const moneyPerTradeAccordingToRisk = (plan.deposit * plan.risk) / 100 * plan.leverage
    const moneyAccordingToTP = (moneyPerTradeAccordingToRisk * 3) / 100; // number "3" is the percent of take profit
    return Math.ceil(dailyPNLNeeded / moneyAccordingToTP);
  }
);
