import { useState } from "react";
import { useParams } from "react-router-dom";
import { SegmentedButton, SegmentedButtonsContainer } from "../components";
import { useAppSelector } from "../redux/hooks";

const PlanID = () => {
  const [activity, setActivity] = useState(4);
  const { planId } = useParams();
  const plan = useAppSelector((state) =>
    state.plans.find((plan) => plan.id === planId)
  );

  const onActivityChange = (evt: React.ChangeEvent<HTMLInputElement>) => setActivity(parseInt(evt.target.value))

  return (
    <div className="bg-surface rounded-t-3xl flex-1 flex flex-col p-6">
      {plan && (
        <div className="flex flex-col gap-2 rounded-3xl bg-surfaceVariant bg-opacity-20">
          <h3>Needed PNL for achieving your goals in Months</h3>
          <span>Select trading activity</span>
          <SegmentedButtonsContainer>
            <SegmentedButton
              id="lazy"
              label="Lazy"
              name="activity"
              value={2.5}
              onChange={onActivityChange}
            />
            <SegmentedButton
              id="active"
              label="Active"
              name="activity"
              value={4}
              checked={activity === 4}
              onChange={onActivityChange}
            />
            <SegmentedButton
              id="full"
              label="Full-time"
              name="activity"
              value={5.75}
              onChange={onActivityChange}
            />
          </SegmentedButtonsContainer>
          <span>Title: {plan.title}</span>
          <span>Deposit: {plan.deposit}</span>
          <span>Goal: {plan.goal}</span>
          <span>Risk: {plan.risk}</span>
          <span>Leverage: {plan.leverage}</span>
        </div>
      )}
    </div>
  );
};

export default PlanID;
