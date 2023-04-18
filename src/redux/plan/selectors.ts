import { createSelector } from "reselect"
import { Plan } from "./planSlice"
import { RootState } from "../store"

export const selectPlanById = createSelector(
  [(state: RootState) => state.plans, (_, id: string) => id],
  (plans, id) => plans.find((plan) => plan.id === id) as Plan
)

export const selectPNLPerDay = createSelector(
  [selectPlanById, (_, __, totalTradingDays: number) => totalTradingDays],
  (plan, totalTradingDays) => (plan.goal / totalTradingDays).toFixed(2)
)

export const selectTradesPerDay = createSelector(
  [selectPlanById, (_, __, dailyPNLNeeded: number) => dailyPNLNeeded],
  (plan, dailyPNLNeeded) => {
    const moneyPerTradeAccordingToRisk =
      ((plan.deposit * plan.risk) / 100) * plan.leverage
    let tradesPerDay = []
    for (let tp of plan.takeProfit) {
      const moneyAccordingToTP = (moneyPerTradeAccordingToRisk * tp) / 100
      tradesPerDay.push(Math.ceil(dailyPNLNeeded / moneyAccordingToTP))
    }
    return tradesPerDay
  }
)
