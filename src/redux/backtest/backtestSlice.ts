import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Backtest = {
  entry: number;
  tp: number; // take profit
  sl: number; // stop loss
  isProfit: boolean;
};

export type BacktestState = Backtest[];

const initialState: BacktestState = [
  {
    entry: 21000.0,
    tp: 21510.0,
    sl: 20900.85,
    isProfit: true,
  },
  {
    entry: 21700.0,
    tp: 22100.0,
    sl: 21490.15,
    isProfit: false,
  },
  {
    entry: 21400.0,
    tp: 21010.0,
    sl: 21510.85,
    isProfit: true,
  },
  {
    entry: 1.47,
    tp: 1.7,
    sl: 1.39,
    isProfit: false,
  },
  {
    entry: 1.38,
    tp: 1.2,
    sl: 1.4,
    isProfit: true,
  },
  {
    entry: 1.18,
    tp: 1.05,
    sl: 1.21,
    isProfit: false,
  },
];

export const backtestSlice = createSlice({
  name: "backtest",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Backtest>) => {
      const newBacktest: Backtest = {
        entry: action.payload.entry,
        tp: action.payload.tp,
        sl: action.payload.sl,
        isProfit: action.payload.isProfit,
      };
      state.push(newBacktest);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = backtestSlice.actions;

export default backtestSlice.reducer;
