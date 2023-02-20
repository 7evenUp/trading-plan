import { createSelector } from "reselect";
import { RootState } from "./store";

export const selectPlanById = createSelector(
  [(state: RootState) => state.plans, (_, id: string) => id],
  (plans, id) => plans.find((plan) => plan.id === id)
);

export const selectDailyPNLNeeded = createSelector(
  [
    (state: RootState) => state.plans,
    (_, id: string) => id,
    (_, __, totalTradingDays: number) => totalTradingDays,
  ],
  (plans, id, totalTradingDays) =>
    (plans.find((plan) => plan.id === id)!.goal / totalTradingDays).toFixed(2)
);
