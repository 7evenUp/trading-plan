import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { useAppSelector } from "../redux/hooks"

import { CreatePlanForm, PlanCard } from "../components"

const Plan = () => {
  const [isCreatingMode, setIsCreatingMode] = useState(true)
  const location = useLocation()
  const plans = useAppSelector((state) => state.plans)
  const isPlansEmpty = !plans.length

  const toggleCreatingMode = () => setIsCreatingMode(!isCreatingMode)

  useEffect(() => {
    if (!isPlansEmpty) toggleCreatingMode()
  }, [])

  return (
    <div className="flex flex-1 flex-row-reverse gap-6 h-[90%] bg-surface">
      <div className="flex flex-col gap-6 w-[320px] h-max relative">
        {isCreatingMode ? (
          !isPlansEmpty && (
            <SidebarHeading
              title="Back to plans"
              onClick={toggleCreatingMode}
            />
          )
        ) : (
          <SidebarHeading title="Add new plan" onClick={toggleCreatingMode} />
        )}
        {isCreatingMode ? (
          <CreatePlanForm closeForm={toggleCreatingMode} />
        ) : (
          plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)
        )}
      </div>

      {location.pathname === "/plan" ? (
        <div className="bg-surfaceContainer rounded-t-3xl flex-1 flex flex-col items-center justify-center text-[32px] leading-10">
          {isCreatingMode ? (
            isPlansEmpty ? (
              <>
                <span>Seems you don’t have any trading plan yet</span>
                <span>Why don’t you create one?</span>
              </>
            ) : (
              <span>Create new plan or come back and choose existing plan</span>
            )
          ) : (
            <span>Choose one of your existing plans or create new</span>
          )}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

const SidebarHeading = ({
  title,
  onClick,
}: {
  title: string
  onClick: () => void
}) => (
  <button
    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+8px)] w-max text-3xl text-onSurfaceVariant border-b border-dashed border-outline"
    type="button"
    onClick={onClick}
  >
    {title}
  </button>
)

export default Plan
