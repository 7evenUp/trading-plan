import { useReducer, Reducer } from 'react'
import TextField from './TextField'

type State = {
  entry: string
  tp: string
  sl: string
  isProfit: boolean
}

type Action = {
  type: string
  payload: any
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'changed_entry': {
      return {
        ...state,
        entry: action.payload
      }
    }
    case 'changed_tp': {
      return {
        ...state,
        tp: action.payload
      }
    }
    case 'changed_sl': {
      return {
        ...state,
        sl: action.payload
      }
    }
    case 'changed_isProfit': {
      return {
        ...state,
        isProfit: action.payload
      }
    }
    default: throw Error()
  }
}

const initialState: State = { entry: '', tp: '', sl: '', isProfit: true };

const BacktestForm = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const type = `changed_${evt.currentTarget.name}`
    const payload = evt.currentTarget.value
    dispatch({type, payload})
  }

  // const handleRadioChange = ()

  return (
    <div className='flex flex-col gap-2'>
      <TextField
        label="Entry price"
        name="entry"
        value={state.entry}
        onChange={handleInputChange}/>
      <TextField
        label="Take profit"
        name="tp"
        value={state.tp}
        onChange={handleInputChange}/>
      <TextField
        label="Stop loss"
        name="sl"
        value={state.sl}
        onChange={handleInputChange}/>
      
      <div className="flex flex-col gap-2">
        <div className='flex gap-4 items-center'>
          <input id="success" type={'radio'} name="isProfit" value="success" onChange={handleInputChange} />
          <label htmlFor='success'>Success</label>
        </div>
        <div className='flex gap-4 items-center'>
          <input id="failure" type={'radio'} name="isProfit" value="failure" onChange={handleInputChange} />
          <label htmlFor='failure'>Failure</label>
        </div>
      </div>
    </div>
  )
}

export default BacktestForm