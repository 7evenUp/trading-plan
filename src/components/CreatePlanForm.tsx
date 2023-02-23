import { AddCircle } from "iconoir-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { trim } from "../lib/trim";
import { useAppDispatch } from "../redux/hooks";
import { add } from "../redux/planSlice";
import FilledButton from "./FilledButton";
import SegmentedButton from "./SegmentedButton";
import SegmentedButtonsContainer from "./SegmentedButtonsContainer";
import Switch from "./Switch";
import TextField from "./TextField";

const CreatePlanForm = ({closeForm}: {closeForm: () => void}) => {
  const [name, setPlanName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [goal, setGoal] = useState("");
  const [risk, setRisk] = useState("");
  const [isLeverage, setIsLeverage] = useState(false);
  const [leverage, setLeverage] = useState("10");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onCreate = () => {
    dispatch(
      add({
        id: trim(name),
        title: name,
        deposit: parseInt(deposit),
        goal: parseInt(goal),
        risk: parseFloat(risk),
        leverage: isLeverage ? parseInt(leverage) : undefined,
      })
    );
    closeForm()
    navigate(`/plan/${trim(name)}`);
  };

  return (
    <div className="w-full p-6 rounded-xl bg-surface">
      <h2 className="text-[22px] leading-7 text-center mb-10">Create your first plan</h2>
      <form className="flex flex-col gap-4 w-full">
        <TextField
          label="Name for your strategy"
          name="name"
          value={name}
          onChange={(evt) => setPlanName(evt.currentTarget.value)}
        />
        <TextField
          label="Total Deposit"
          name="deposit"
          value={deposit}
          onChange={(evt) => setDeposit(evt.currentTarget.value)}
        />
        <TextField
          label="Trading goal"
          name="goal"
          value={goal}
          onChange={(evt) => setGoal(evt.currentTarget.value)}
        />
        <div className="flex flex-col gap-1">
          <span className="text-onSurface font-medium text-base leading-6 tracking-[0.15px]">
            Risk management
          </span>
          <SegmentedButtonsContainer>
            <SegmentedButton
              id="lazy"
              label="1%"
              name="risk"
              value='1'
              onChange={(evt) => {
                setRisk(evt.target.value);
              }}
            />
            <SegmentedButton
              id="active"
              label="2%"
              name="risk"
              value='2'
              onChange={(evt) => {
                setRisk(evt.target.value);
              }}
            />
            <SegmentedButton
              id="full"
              label="5%"
              name="risk"
              value='5'
              onChange={(evt) => {
                setRisk(evt.target.value);
              }}
            />
          </SegmentedButtonsContainer>
        </div>

        <div className="w-full flex items-center justify-between">
          <span className="text-onSurface font-medium text-base leading-6 tracking-[0.15px]">
            Will you use leverage?
          </span>
          <Switch
            checked={isLeverage}
            onChange={() => setIsLeverage(!isLeverage)}
          />
        </div>
        {isLeverage && (
          <>
            <span className="text-onSurface font-medium text-base leading-6 tracking-[0.15px]">
              Leverage is {leverage}X
            </span>
            <div className="relative flex">
              <input
                className="relative appearance-none bg-primaryContainer rounded-full h-1 flex-1"
                type="range"
                min={2}
                max={25}
                value={leverage}
                onChange={(evt) => setLeverage(evt.target.value)}
              />
            </div>
          </>
        )}
        <FilledButton label="create" onClick={onCreate} icon={<AddCircle />} />
      </form>
    </div>
  );
};

export default CreatePlanForm;
