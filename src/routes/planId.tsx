import { useParams } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

const PlanID = () => {
  const params = useParams()
  const plans = useAppSelector((state) => state.plans)
  
  return (
    <div className="bg-emerald-700 flex-1 p-4">
      {plans && plans.map((plan) => (
            <div key={plan.title} className="flex flex-col gap-2">
              <span>Title: {plan.title}</span>
              <span>Deposit: {plan.deposit}</span>
              <span>Goal: {plan.goal}</span>
              <span>Risk: {plan.risk}</span>
              <span>Leverage: {plan.leverage}</span>
            </div>
          ))}
    </div>
  )
}

export default PlanID