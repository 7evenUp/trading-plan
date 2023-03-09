import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Backtest = {
  entry: number; // Price when entering trade
  exit: number; // Price when exiting trade
  result: 'success' | 'failure'
};

export type BacktestState = Backtest[];

const initialState: BacktestState = [
  {
    entry: 1511.43,
    exit: 1533.09,
    result: 'failure',
  },
  {
    entry: 1600.49,
    exit: 1647.04,
    result: 'success',
  },
  {
    entry: 1555.97,
    exit: 1543.95,
    result: 'success',
  },
  {
    entry: 1653.86,
    exit: 1581.55,
    result: 'failure',
  },
  {
    entry: 1554.24,
    exit: 1570.91,
    result: 'failure',
  },
  {
    entry: 1641.68,
    exit: 1678.14,
    result: 'success',
  },
  {
    entry: 1619.48,
    exit: 1634.81,
    result: 'failure',
  },
  {
    entry: 1671.03,
    exit: 1653.08,
    result: 'failure',
  },
  {
    entry: 1579.81,
    exit: 1537.03,
    result: 'success',
  },
  {
    entry: 1560.31,
    exit: 1572.26,
    result: 'success',
  },
  {
    entry: 1659.76,
    exit: 1613.73,
    result: 'success',
  },
  {
    entry: 1641.36,
    exit: 1644.26,
    result: 'success',
  },
];

export const backtestSlice = createSlice({
  name: "backtest",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Backtest>) => {
      const newBacktest: Backtest = {
        entry: action.payload.entry,
        exit: action.payload.exit,
        result: action.payload.result,
      };
      state.push(newBacktest);
    },
  },
});

export const { add } = backtestSlice.actions;

export default backtestSlice.reducer;