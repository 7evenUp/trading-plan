import { useReducer, Reducer } from "react";
import TextField from "./TextField";

type State = {
  entry: string;
  tp: string;
  sl: string;
  isProfit: boolean;
};

type Action = {
  type: string;
  payload: any;
};

function reducer(state: State, action: Action) {
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
    case "changed_isProfit": {
      return {
        ...state,
        isProfit: action.payload,
      };
    }
    default:
      throw Error();
  }
}

const initialState: State = { entry: "", tp: "", sl: "", isProfit: true };

const BacktestForm = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const type = `changed_${evt.currentTarget.name}`;
    const payload = evt.currentTarget.value;
    dispatch({ type, payload });
  };

  return (
    <div className="flex flex-col gap-2">
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
        <label htmlFor="success" className="flex gap-4 items-center">
          <div className="relative flex">
            <input
              className="appearance-none peer border-2 border-outline rounded-full w-5 h-5 checked:border-primary"
              id="success"
              type={"radio"}
              name="isProfit"
              value="success"
              onChange={handleInputChange}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block
                          w-[10px] h-[10px] rounded-full bg-primary scale-0 transition-all peer-checked:scale-100"
            />
          </div>
          <span>Success</span>
        </label>
        <label htmlFor="failure" className="flex gap-4 items-center">
          <div className="relative flex">
            <input
              className="appearance-none peer border-2 border-outline rounded-full w-5 h-5 checked:border-primary"
              id="failure"
              type={"radio"}
              name="isProfit"
              value="failure"
              onChange={handleInputChange}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block
                          w-[10px] h-[10px] rounded-full bg-primary scale-0 transition-all peer-checked:scale-100"
            />
          </div>
          <span>failure</span>
        </label>
      </div>
    </div>
  );
};

export default BacktestForm;
