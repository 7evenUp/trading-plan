import { useReducer, Reducer } from "react";
import { add } from "../redux/backtest/backtestSlice";
import { useAppDispatch } from "../redux/hooks";
import Card from "./Card";
import FilledButton from "./FilledButton";
import Radio from "./Radio";
import TextField from "./TextField";

type State = {
  entry: string;
  exit: string;
  result: 'success' | 'failure';
};

type Action = {
  type: string;
  payload?: any;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "changed_entry": {
      return {
        ...state,
        entry: action.payload,
      };
    }
    case "changed_exit": {
      return {
        ...state,
        exit: action.payload,
      };
    }
    case "changed_result": {
      return {
        ...state,
        result: action.payload,
      };
    }
    case "reset_form": {
      return {
        ...state,
        entry: '',
        exit: '',
      }
    }
    default:
      throw Error();
  }
}

const initialState: State = { entry: "", exit: "", result: 'success' };

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
    if (!state.entry || !state.exit) {
      return null
    }
    reduxDispatch(add({
      entry: parseFloat(state.entry),
      exit: parseFloat(state.exit),
      result: state.result
    }))
    dispatch({type: 'reset_form'})
  }

  return (
    <Card className="flex flex-col gap-4">
      <h3 className="text-2xl text-onSurfaceVariant text-center">
        Add trade
      </h3>
      <TextField
        label="Entry price"
        name="entry"
        value={state.entry}
        onChange={handleInputChange}
      />
      <TextField
        label="Exit"
        name="exit"
        value={state.exit}
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
    </Card>
  );
};

export default BacktestForm;
