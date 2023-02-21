import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { SegmentedButton, SegmentedButtonsContainer } from "../components";
import { useAppSelector } from "../redux/hooks";
import { Plan } from "../redux/planSlice";
import { selectDailyPNLNeeded, selectPlanById } from "../redux/selectors";

const DAYS_IN_WEEK = 7;
const ACTIVITY_STATES = {
  lazy: 2.5,
  active: 4,
  fullTime: 5.75,
};
const DURATION_STATES_IN_MONTHS = {
  one: 30,
  three: 91,
  six: 182,
  twelve: 365,
};

const PlanID = () => {
  const [activity, setActivity] = useState(ACTIVITY_STATES.active);
  const [duration, setDuration] = useState(DURATION_STATES_IN_MONTHS.six);
  const totalTradingDays = Math.floor(duration * (activity / DAYS_IN_WEEK));
  const { planId } = useParams();

  let plan: Plan | undefined;
  if (planId !== undefined) {
    plan = useAppSelector((state) => selectPlanById(state, planId));
  }
  const dailyPNLNeeded = useAppSelector((state) =>
    selectDailyPNLNeeded(state, plan?.id, totalTradingDays)
  );

  const onActivityChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setActivity(parseFloat(evt.target.value));
  const onDurationChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setDuration(parseFloat(evt.target.value));

  return (
    <div className="bg-surface rounded-t-3xl flex-1 flex flex-col p-6">
      {plan && (
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-surfaceVariant bg-opacity-20 w-[450px] p-6">
          <h3 className="text-[22px] leading-7 text-onSurfaceVariant text-center w-[260px]">
            Needed PNL for achieving your goals in Months
          </h3>
          <div className="w-full flex flex-col items-center gap-2">
            <span className="text-base tracking-[0.5px] text-onSurfaceVariant">Select trading activity</span>
            <SegmentedButtonsContainer>
              <SegmentedButton
                id="lazy"
                label="Lazy"
                name="activity"
                value={ACTIVITY_STATES.lazy.toString()}
                onChange={onActivityChange}
              />
              <SegmentedButton
                id="active"
                label="Active"
                name="activity"
                value={ACTIVITY_STATES.active.toString()}
                checked={activity === ACTIVITY_STATES.active}
                onChange={onActivityChange}
              />
              <SegmentedButton
                id="full"
                label="Full-time"
                name="activity"
                value={ACTIVITY_STATES.fullTime.toString()}
                onChange={onActivityChange}
              />
            </SegmentedButtonsContainer>
          </div>

          <div className="w-full flex flex-col items-center gap-2">
            <span className="text-base tracking-[0.5px] text-onSurfaceVariant">Select expiration date goal in months</span>
            <SegmentedButtonsContainer>
              <SegmentedButton
                id="one"
                label="1"
                name="duration"
                value={DURATION_STATES_IN_MONTHS.one.toString()}
                onChange={onDurationChange}
              />
              <SegmentedButton
                id="three"
                label="3"
                name="duration"
                value={DURATION_STATES_IN_MONTHS.three.toString()}
                onChange={onDurationChange}
              />
              <SegmentedButton
                id="six"
                label="6"
                name="duration"
                value={DURATION_STATES_IN_MONTHS.six.toString()}
                checked={duration === DURATION_STATES_IN_MONTHS.six}
                onChange={onDurationChange}
              />
              <SegmentedButton
                id="twelve"
                label="12"
                name="duration"
                value={DURATION_STATES_IN_MONTHS.twelve.toString()}
                onChange={onDurationChange}
              />
            </SegmentedButtonsContainer>
          </div>

          <div className="flex flex-col divide-y divide-outline w-full">
            <div className="flex justify-between p-4">
              <span className="max-w-[110px] text-sm tracking-[0.25px] text-onSurfaceVariant">
                Total trading days per month
              </span>
              <span className="text-[22px] leading-7 text-onSurfaceVariant m-auto">{totalTradingDays} days</span>
            </div>
            <div className="flex justify-between p-4">
              <span className="max-w-[110px] text-sm tracking-[0.25px] text-onSurfaceVariant">Needed PNL per day</span>
              <span className="text-[22px] leading-7 text-onSurfaceVariant m-auto">{dailyPNLNeeded}$</span>
            </div>
            <div className="flex justify-between p-4">
              <span className="max-w-[110px] text-sm tracking-[0.25px] text-onSurfaceVariant">
                Total successful trades per day
              </span>
              <div className="flex gap-3 m-auto text-sm tracking-[0.1px] font-medium text-onSurfaceVariant">
                <span className="bg-surfaceVariant py-[6px] px-2 rounded-full min-w-[60px] text-center">19</span>
                <span className="bg-surfaceVariant py-[6px] px-2 rounded-full min-w-[60px] text-center">7</span>
                <span className="bg-surfaceVariant py-[6px] px-2 rounded-full min-w-[60px] text-center">4</span>
              </div>
            </div>
            <div className="flex justify-between p-4">
              <span className="max-w-[110px] text-sm tracking-[0.25px] text-onSurfaceVariant">Needed PNL per trade</span>
              <div className="flex gap-3 m-auto text-sm tracking-[0.1px] font-medium text-onSurfaceVariant">
                <span className="bg-surfaceVariant py-[6px] px-2 rounded-full min-w-[60px] text-center">2.76$</span>
                <span className="bg-surfaceVariant py-[6px] px-2 rounded-full min-w-[60px] text-center">846.28$</span>
                <span className="bg-surfaceVariant py-[6px] px-2 rounded-full min-w-[60px] text-center">13.8$</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanID;
