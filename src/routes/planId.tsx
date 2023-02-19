import { useParams } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

const PlanID = () => {
  const params = useParams()
  const title = useAppSelector(state => state.plans[0].title)
  const deposit = useAppSelector(state => state.plans[0].deposit)
  
  return (
    <div className="bg-emerald-700 flex-1 p-4">
      <h3>Plan title: {title}</h3>
      <span>Deposit: {deposit}$</span>
      <span>Plan ID: {params.planId}</span>
    </div>
  )
}

export default PlanID