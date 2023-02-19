import { AddCircle } from "iconoir-react";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  SegmentedButton,
  SegmentedButtonsContainer,
  Switch,
  TextField,
} from "../components";
import FilledButton from "../components/FilledButton";
import { trim } from "../lib/trim";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { add } from "../redux/planSlice";

const Plan = () => {
  const [planName, setPlanName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [goal, setGoal] = useState("");
  const [risk, setRisk] = useState("");
  const [isLeverage, setIsLeverage] = useState(false);
  const [leverage, setLeverage] = useState("10");
  const navigate = useNavigate();
  const location = useLocation();
  const plans = useAppSelector((state) => state.plans)
  const dispatch = useAppDispatch();

  const onCreate = () => {
    dispatch(
      add({
        title: planName,
        deposit: parseInt(deposit),
        goal: parseInt(goal),
        risk: parseInt(risk),
        leverage: parseInt(leverage),
      })
    );
    navigate(`/plan/${trim(planName)}`);
  };

  return (
    <div className="bg-surfaceVariant flex flex-1 flex-row-reverse gap-6 h-[90%]">
      <div className="p-6 bg-surface w-[320px] rounded-xl flex flex-col items-center gap-10 h-max">
        <h2 className="text-[22px] leading-7">Create your first plan</h2>
        <form className="flex flex-col gap-4 w-full">
          <TextField
            label="Name for your strategy"
            name="name"
            value={planName}
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
                value={1}
                onChange={(evt) => {
                  setRisk(evt.target.value);
                }}
              />
              <SegmentedButton
                id="active"
                label="2%"
                name="risk"
                value={2}
                onChange={(evt) => {
                  setRisk(evt.target.value);
                }}
              />
              <SegmentedButton
                id="full"
                label="5%"
                name="risk"
                value={5}
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
          <FilledButton
            label="create"
            onClick={onCreate}
            icon={<AddCircle />}
          />
        </form>
      </div>

      {location.pathname === "/plan" ? (
        <div className="bg-surface rounded-t-3xl flex-1 flex flex-col items-center justify-center text-[32px] leading-10">
          <span>Seems you don’t have any trading plan yet</span>
          <span>Why don’t you create one?</span>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Plan;
