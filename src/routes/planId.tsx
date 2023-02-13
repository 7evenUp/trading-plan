import { useParams } from "react-router-dom"

const PlanID = () => {
  const params = useParams()
  
  return (
    <div className="bg-emerald-700 flex-1">
      <h3>Plan ID: {params.planId}</h3>
    </div>
  )
}

export default PlanID