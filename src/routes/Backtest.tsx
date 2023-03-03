import { useState } from "react"
import { BacktestForm, TextField } from "../components"

const Backtest = () => {
  const [entry, setEntry] = useState('')
  const [tp, setTp] = useState('')

  const handleInputChange = ((evt: React.FormEvent<HTMLInputElement>) => { console.log(evt.currentTarget.name)})

  return (
    <div className="bg-surface rounded-t-3xl h-[90%] w-5/6 flex flex-col items-center justify-center gap-4">
      <BacktestForm />
      {/* <h1 className="text-4xl text-onSurface">Backtest page</h1>
      <input onChange={handleInputChange} name="x"/>
      <input onChange={handleInputChange} name="y"/> */}
      {/* <TextField
        label="Entry price"
        name="entry"
        value={entry}
        onChange={handleInputChange}
      />
      <TextField
        label="Entry price"
        name="entry"
        value={tp}
        onChange={handleInputChange}
      /> */}
    </div>
  )
}

export default Backtest