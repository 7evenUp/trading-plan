import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TextField } from "../components";
import { useAppDispatch } from "../redux/hooks";
import { add } from "../redux/planSlice";

const Plan = () => {
  const [planName, setPlanName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [goal, setGoal] = useState("");
  const [isLeverage, setIsLeverage] = useState(false);
  const [leverage, setLeverage] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    <div className="bg-violet-800 flex flex-1 flex-row-reverse h-[90%]">
      <div className="p-6 bg-surface w-[320px] rounded-xl">
        <h2 className="text-3xl">Create a plan</h2>
        <form className="flex flex-col gap-4 mt-4">
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
          <div className="flex w-full">
            <label htmlFor="lazy" className="flex-1 bg-gray-400 hover:bg-gray-500 first:rounded-l-full last:rounded-r-full">
              1%
              <input type="radio" id="lazy" name="risk" value={1} />
            </label>
            <label htmlFor="active" className="flex-1 bg-gray-400 hover:bg-gray-500 first:rounded-l-full last:rounded-r-full">
              2%
              <input type="radio" id="active" name="risk" value={2} />
            </label>
            <label htmlFor="full" className="flex-1 bg-gray-400 hover:bg-gray-500 first:rounded-l-full last:rounded-r-full">
              5%
              <input type="radio" id="full" name="risk" value={5} />
            </label>
          </div>
          
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

      <Outlet />
    </div>
  );
};

export default Plan;
