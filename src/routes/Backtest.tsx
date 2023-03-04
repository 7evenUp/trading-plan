import { BacktestForm } from "../components"
import { selectBacktests } from "../redux/backtest/backtestSlice"
import { useAppSelector } from "../redux/hooks"

const Backtest = () => {
  const backtest = useAppSelector(selectBacktests)

  return (
    <div className="bg-surface rounded-t-3xl h-[90%] w-5/6 flex items-center justify-center gap-4 p-4">
      <BacktestForm />
      <div className="flex gap-2 flex-wrap max-h-full">
        {backtest.map((bt, i) => (
          <div className="flex flex-col gap-1" key={i}>
          <span>Entry: {bt.entry}</span>
          <span>Take profit: {bt.tp}</span>
          <span>Stop loss: {bt.sl}</span>
          <span>Result: {bt.result}</span>
          <span>=========================</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Backtest