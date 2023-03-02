import { useState } from "react"
import { TextField } from "../components"

const Backtest = () => {
  const [backtestName, setBacktestName] = useState('')

  return (
    <div className="bg-surface rounded-t-3xl h-[90%] w-5/6 flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl text-onSurface">Backtest page</h1>
      <TextField
        label="Backtest name"
        name="backtest"
        value={backtestName}
        onChange={(evt) => setBacktestName(evt.currentTarget.value)}
      />
    </div>
  )
}

export default Backtest