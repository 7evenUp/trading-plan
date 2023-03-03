import { useReducer, Reducer } from 'react'

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

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const type = `changed_${evt.currentTarget.name}`
    const payload = evt.currentTarget.value
    dispatch({type, payload})
  }

  return (
    <div className='flex flex-col gap-2'>
      <input name="entry" value={state.entry} onChange={handleChange} />
      <input name="tp" value={state.tp} onChange={handleChange} />
      <input name="sl" value={state.sl} onChange={handleChange} />
    </div>
  )
}

export default BacktestForm