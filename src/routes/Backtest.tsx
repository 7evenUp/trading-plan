import { BacktestForm } from "../components";
import {
  selectBacktests,
  selectPNL,
  selectWinrate,
  selectWinsAndFailsAmount,
} from "../redux/backtest/selectors";
import { useAppSelector } from "../redux/hooks";

const Backtest = () => {
  const backtest = useAppSelector(selectBacktests);
  const pnl = useAppSelector(selectPNL);
  const winrate = useAppSelector(selectWinrate);
  const { wins, fails } = useAppSelector(selectWinsAndFailsAmount);

  return (
    <div className="bg-surface rounded-t-3xl h-[90%] w-5/6 flex items-center justify-center gap-4 p-4">
      <BacktestForm />
      <div className="flex gap-2 flex-col max-h-full">
        <span>
          Total trades {backtest.length} ({wins} | {fails})
        </span>
        <span>PNL IS {pnl}%</span>
        <span>Winrate is {winrate.toFixed(2)}%</span>
        <span>WL ratio is {(wins / fails).toFixed(2)}</span>

        {/* {backtest.map((bt, i) => (
          <div className="flex flex-col gap-1" key={i}>
          <span>Entry: {bt.entry}</span>
          <span>Take profit: {bt.tp}</span>
          <span>Stop loss: {bt.sl}</span>
          <span>Result: {bt.result}</span>
          <span>=========================</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Backtest;
