import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CreatePlanForm, PlanCard } from "../components";
import { useAppSelector } from "../redux/hooks";

const Plan = () => {
  const [isCreatingMode, setIsCreatingMode] = useState(true);
  const location = useLocation();
  const plans = useAppSelector((state) => state.plans);

  useEffect(() => {
    if (plans.length) setIsCreatingMode(false);
  }, []);

  return (
    <div className="bg-surfaceVariant flex flex-1 flex-row-reverse gap-6 h-[90%]">
      {isCreatingMode ? (
        <CreatePlanForm closeForm={() => setIsCreatingMode(false)} />
      ) : (
        <div className="w-[320px] rounded-xl items-center gap-6 h-max flex flex-col">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))}
        </div>
      )}

      {location.pathname === "/plan" ? (
        <div className="bg-surface rounded-t-3xl flex-1 flex flex-col items-center justify-center text-[32px] leading-10">
          {isCreatingMode ? (
            <>
              <span>Seems you don’t have any trading plan yet</span>
              <span>Why don’t you create one?</span>
            </>
          ) : (
            <span>Choose one of your existing plans or create new</span>
          )}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Plan;
