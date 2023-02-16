import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  SegmentedButton,
  SegmentedButtonsContainer,
  TextField,
} from "../components";
import { useAppDispatch } from "../redux/hooks";
import { add } from "../redux/planSlice";

const Plan = () => {
  const [planName, setPlanName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [goal, setGoal] = useState("");
  const [risk, setRisk] = useState("");
  const [isLeverage, setIsLeverage] = useState(false);
  const [leverage, setLeverage] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("current location is", location.pathname);
  console.log("Risk is:", risk);

  const onCreate = () => {
    dispatch(
      add({
        title: "title for plan",
        deposit: 138,
        goal: 12,
        risk: 2,
        leverage: 10,
      })
    );
    navigate("/plan/title-for-plan");
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
          <SegmentedButtonsContainer>
            <SegmentedButton
              id="lazy"
              label="1%"
              name="risk"
              value={1}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setRisk(evt.target.value);
              }}
            />
            <SegmentedButton
              id="active"
              label="2%"
              name="risk"
              value={2}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setRisk(evt.target.value);
              }}
            />
            <SegmentedButton
              id="full"
              label="5%"
              name="risk"
              value={5}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setRisk(evt.target.value);
              }}
            />
          </SegmentedButtonsContainer>

          <label htmlFor="isLeverage">
            Will you use leverage?
            <input
              id="isLeverage"
              type={"checkbox"}
              checked={isLeverage}
              onChange={() => setIsLeverage(!isLeverage)}
            />
          </label>
          {isLeverage && (
            <TextField
              label="What is your leverage?"
              name="leverage"
              value={leverage}
              onChange={(evt) => setLeverage(evt.currentTarget.value)}
            />
          )}
          <button
            onClick={onCreate}
            type="button"
            className="bg-slate-400 rounded-full w-max px-4 py-1 self-center hover:bg-slate-500 active:bg-slate-600"
          >
            + create
          </button>
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
