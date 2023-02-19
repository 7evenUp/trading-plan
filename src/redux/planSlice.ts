import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Plan = {
  title: string
  deposit: number
  goal: number
  risk: number
  leverage?: number
}

export type PlanState = Plan[]

const initialState: PlanState = [
  {
    title: 'My new strategy',
    deposit: 1000,
    goal: 500,
    risk: 5,
    leverage: 10
  },
  {
    title: 'Trading stocks',
    deposit: 10000,
    goal: 1000,
    risk: 1
  },
]

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Plan>) => {
      const newPlan = {
        title: action.payload.title,
        deposit: action.payload.deposit,
        goal: action.payload.goal,
        risk: action.payload.risk,
        leverage: action.payload.leverage
      }
      state.push(newPlan)
    }
  },
})

// Action creators are generated for each case reducer function
export const { add } = planSlice.actions

export default planSlice.reducer