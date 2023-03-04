import { useReducer, Reducer } from "react";
import { add } from "../redux/backtest/backtestSlice";
import { useAppDispatch } from "../redux/hooks";
import FilledButton from "./FilledButton";
import Radio from "./Radio";
import TextField from "./TextField";

type State = {
  entry: string;
  tp: string;
  sl: string;
  result: 'success' | 'failure';
};

type Action = {
  type: string;
  payload: any;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "changed_entry": {
      return {
        ...state,
        entry: action.payload,
      };
    }
    case "changed_tp": {
      return {
        ...state,
        tp: action.payload,
      };
    }
    case "changed_sl": {
      return {
        ...state,
        sl: action.payload,
      };
    }
    case "changed_result": {
      return {
        ...state,
        result: action.payload,
      };
    }
    default:
      throw Error();
  }
}

const initialState: State = { entry: "", tp: "", sl: "", result: 'success' };

const BacktestForm = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  const reduxDispatch = useAppDispatch()

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const type = `changed_${evt.currentTarget.name}`;
    const payload = evt.currentTarget.value;
    dispatch({ type, payload });
  };

  const handleAdd = () => {
    reduxDispatch(add({
      entry: parseFloat(state.entry),
      tp: parseFloat(state.tp),
      sl: parseFloat(state.sl),
      result: state.result
    }))
  }

  return (
    <div className="flex flex-col gap-4">
      <TextField
        label="Entry price"
        name="entry"
        value={state.entry}
        onChange={handleInputChange}
      />
      <TextField
        label="Take profit"
        name="tp"
        value={state.tp}
        onChange={handleInputChange}
      />
      <TextField
        label="Stop loss"
        name="sl"
        value={state.sl}
        onChange={handleInputChange}
      />

      <div className="flex flex-col gap-2">
        <span className="text-onSurface font-medium text-base leading-6 tracking-[0.15px]">
          Trade result
        </span>
        <Radio label="Success" name="result" value="success" onChange={handleInputChange} />
        <Radio label="Failure" name="result" value="failure" onChange={handleInputChange} />
      </div>

      <FilledButton label="Add" onClick={handleAdd} />
    </div>
  );
};

export default BacktestForm;
