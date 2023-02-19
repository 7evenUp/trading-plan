import { useNavigate } from "react-router-dom";
import { trim } from "../lib/trim";
import { Plan } from "../redux/planSlice";

const PlanCard = ({ plan }: { plan: Plan }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`group bg-background rounded-xl w-full cursor-pointer
                        ${
                          location.pathname === "/plan/" + trim(plan.title) &&
                          "is-active ring-1 ring-outline"
                        }`}
      onClick={() => {
        navigate(`/plan/${trim(plan.title)}`);
      }}
    >
      <header className="group-[.is-active]:bg-primary group-[.is-active]:bg-opacity-40 rounded-t-xl flex items-center justify-between p-4 bg-surfaceVariant bg-opacity-40">
        <h2 className="text-[22px] leading-7 text-onSurface group-[.is-active]:text-onPrimaryContainer">
          {plan.title}
        </h2>
      </header>
      <div className="flex items-center justify-between px-4 py-6 group-[.is-active]:bg-primaryContainer rounded-b-xl">
        <div className="flex flex-col gap-1 items-center">
          <span className="text-base tracking-[0.15px] font-medium text-onSurface group-[.is-active]:text-onPrimaryContainer">
            Deposit
          </span>
          <span
            className="text-base tracking-[0.15px] font-medium min-w-[80px] px-2 py-1
                                bg-tertiaryContainer text-onTertiaryContainer rounded-full flex justify-center
                                group-[.is-active]:bg-primary group-[.is-active]:text-onPrimary"
          >
            {plan.deposit}$
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <span className="text-base tracking-[0.15px] font-medium text-onSurface">
            Goal
          </span>
          <div
            className="text-base tracking-[0.15px] font-medium min-w-[80px] px-2 py-1
                                bg-tertiaryContainer text-onTertiaryContainer rounded-full flex justify-center
                                group-[.is-active]:bg-primary group-[.is-active]:text-onPrimary"
          >
            {plan.goal}$
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <span className="text-base tracking-[0.15px] font-medium text-onSurface">
            Risk
          </span>
          <div
            className="text-base tracking-[0.15px] font-medium min-w-[80px] px-2 py-1
                                bg-tertiaryContainer text-onTertiaryContainer rounded-full flex justify-center
                                group-[.is-active]:bg-primary group-[.is-active]:text-onPrimary"
          >
            {plan.risk}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
