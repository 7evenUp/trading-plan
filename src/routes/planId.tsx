import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { SegmentedButton, SegmentedButtonsContainer } from "../components";
import { useAppSelector } from "../redux/hooks";
import { Plan } from "../redux/planSlice";
import { selectDailyPNLNeeded, selectPlanById } from "../redux/selectors";

const DAYS_IN_WEEK = 7

const PlanID = () => {
  const [activity, setActivity] = useState(4);
  const [duration, setDuration] = useState(182)
  const totalTradingDays = Math.floor(duration * (activity / DAYS_IN_WEEK))
  const { planId } = useParams();
  
  let plan: Plan | undefined
  if (planId !== undefined) {
    plan = useAppSelector(state => selectPlanById(state, planId))
  }
  const dailyPNLNeeded = useAppSelector(state => selectDailyPNLNeeded(state, plan?.id, totalTradingDays))

  const onActivityChange = (evt: ChangeEvent<HTMLInputElement>) => setActivity(parseFloat(evt.target.value))
  const onDurationChange = (evt: ChangeEvent<HTMLInputElement>) => setDuration(parseFloat(evt.target.value))

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
              value='2.5'
              onChange={onActivityChange}
            />
            <SegmentedButton
              id="active"
              label="Active"
              name="activity"
              value='4'
              checked={activity === 4}
              onChange={onActivityChange}
            />
            <SegmentedButton
              id="full"
              label="Full-time"
              name="activity"
              value='5.75'
              onChange={onActivityChange}
            />
          </SegmentedButtonsContainer>
          <span>Select expiration date goal in months</span>
          <SegmentedButtonsContainer>
            <SegmentedButton
              id="one"
              label="1"
              name="duration"
              value='30'
              onChange={onDurationChange}
            />
            <SegmentedButton
              id="three"
              label="3"
              name="duration"
              value='91'
              onChange={onDurationChange}
            />
            <SegmentedButton
              id="six"
              label="6"
              name="duration"
              value='182'
              checked={duration === 182}
              onChange={onDurationChange}
            />
            <SegmentedButton
              id="twelve"
              label="12"
              name="duration"
              value='365'
              onChange={onDurationChange}
            />
          </SegmentedButtonsContainer>

          <div className="flex flex-col divide-y-0">
            <div className="flex justify-between">
              <span>Total trading days per month</span>
              <span>{totalTradingDays} days</span>
            </div>
            <div className="flex justify-between">
              <span>Needed PNL per day</span>
              <span>{dailyPNLNeeded}$</span>
            </div>
            <div className="flex justify-between">
              <span>Total successful trades per day</span>
              <div className="flex">
                <span>19</span>
                <span>7</span>
                <span>4</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Needed PNL per day</span>
              <div className="flex">
                <span>2.76$</span>
                <span>8.28$</span>
                <span>13.8$</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanID;
