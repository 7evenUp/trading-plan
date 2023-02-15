import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlanState {
  title: string
  deposit: number
  goal: number
  risk: number
  leverage?: number
}

const initialState: PlanState = {
  title: '',
  deposit: 0,
  goal: 0,
  risk: 0,
}

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PlanState>) => {
      state.title = action.payload.title
      state.deposit = action.payload.deposit
      state.goal = action.payload.goal
      state.risk = action.payload.risk
      if (action.payload.leverage) state.leverage = action.payload.leverage
    }
  },
})

// Action creators are generated for each case reducer function
export const { add } = planSlice.actions

export default planSlice.reducer