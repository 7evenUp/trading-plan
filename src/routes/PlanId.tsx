import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  SegmentedButton,
  SegmentedButtonsContainer,
  Tooltip,
} from "../components";
import { useAppSelector } from "../redux/hooks";
import {
  selectPNLPerDay,
  selectPlanById,
  selectTradesPerDay,
} from "../redux/plan/selectors";

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
  const { planId } = useParams();
  const [activity, setActivity] = useState(ACTIVITY_STATES.active);
  const [duration, setDuration] = useState(DURATION_STATES_IN_MONTHS.six);

  if (planId === undefined) return null;

  const plan = useAppSelector((state) => selectPlanById(state, planId));

  const totalTradingDays = Math.floor(duration * (activity / DAYS_IN_WEEK));

  const tradeVolume = (plan.deposit * plan.risk) / 100;
  const tradeVolumeWithLeverage = tradeVolume * plan.leverage;

  const PNLPerDay = useAppSelector((state) =>
    selectPNLPerDay(state, plan.id, totalTradingDays)
  );
  const tradesPerDay = useAppSelector((state) =>
    selectTradesPerDay(state, plan.id, parseFloat(PNLPerDay))
  );

  let PNLsPerTradeNeeded = [];
  for (let trade of tradesPerDay) {
    PNLsPerTradeNeeded.push((parseFloat(PNLPerDay) / trade).toFixed(2));
  }

  const onActivityChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setActivity(parseFloat(evt.target.value));
  const onDurationChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setDuration(parseFloat(evt.target.value));

  return (
    <div className="bg-surface rounded-t-3xl flex-1 flex justify-between p-6 gap-6 relative">
      <h2 className="absolute top-0 left-0 -translate-y-[calc(100%+8px)] text-4xl text-onSurfaceVariant">
        {plan.title}
      </h2>
      <Card className="flex flex-col items-center gap-6 w-[450px]">
        <h3 className="text-[22px] leading-7 text-onSurfaceVariant text-center w-[260px]">
          Needed PNL for achieving your goals in Months
        </h3>
        <div className="w-full flex flex-col items-center gap-2">
          <Tooltip title="This parameter calculates how many days per week are you going to trade.">
            <span className="text-base tracking-[0.5px] text-onSurfaceVariant border-b border-dashed border-outline">
              Select trading activity
            </span>
          </Tooltip>
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
          <Tooltip title="How many months do you want to chase your goal?">
            <span className="text-base tracking-[0.5px] text-onSurfaceVariant border-b border-dashed border-outline">
              Select expiration date goal in months
            </span>
          </Tooltip>
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
            <span className="text-[22px] leading-7 text-onSurfaceVariant m-auto">
              {totalTradingDays} days
            </span>
          </div>
          <div className="flex justify-between p-4">
            <span className="max-w-[110px] text-sm tracking-[0.25px] text-onSurfaceVariant">
              Needed PNL per day
            </span>
            <span className="text-[22px] leading-7 text-onSurfaceVariant m-auto">
              {PNLPerDay}$
            </span>
          </div>
          <div className="flex justify-between p-4">
            <Tooltip
              className="max-w-[110px]"
              title={`According to your take profits: ${plan.takeProfit.join(
                "%, "
              )}%`}
            >
              <span className="text-sm tracking-[0.25px] text-onSurfaceVariant border-b border-dashed border-outline cursor-help">
                Total successful trades per day
              </span>
            </Tooltip>

            <div className="flex gap-2 m-auto">
              {tradesPerDay.map((trades, i) => (
                <span
                  key={i}
                  className="text-sm tracking-[0.25px] text-onTertiaryContainer m-auto bg-tertiaryContainer rounded-full px-4 py-1"
                >
                  {trades}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between p-4">
            <span className="max-w-[110px] text-sm tracking-[0.25px] text-onSurfaceVariant">
              Needed PNL per trade
            </span>
            <div className="flex gap-2 m-auto">
              {PNLsPerTradeNeeded.map((pnlPerTrade, i) => (
                <span
                  key={i}
                  className="text-sm tracking-[0.25px] text-onTertiaryContainer m-auto bg-tertiaryContainer rounded-full px-4 py-1"
                >
                  {pnlPerTrade}$
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="flex flex-col items-center flex-1 divide-y">
        <h3 className="text-[22px] leading-7 text-onSurfaceVariant text-center w-[260px] mb-4">
          Total Info
        </h3>
        <InfoLine>
          <span>Deposit: </span>
          <span>{plan.deposit}$</span>
        </InfoLine>
        <InfoLine>
          <span>Goal: </span>
          <span>{plan.goal}$</span>
        </InfoLine>
        <InfoLine>
          <span>Risk management: </span>
          <span>{plan.risk}%</span>
        </InfoLine>
        <InfoLine>
          <span>Leverage: </span>
          <span>{plan.leverage}X</span>
        </InfoLine>
        <InfoLine>
          <span>Trade volume: </span>
          <span>{tradeVolume}$</span>
        </InfoLine>
        <InfoLine>
          <span>Leveraged trade volume: </span>
          <span>{tradeVolumeWithLeverage}$</span>
        </InfoLine>
        <InfoLine>
          <span>Take profit: </span>
          <div className="flex gap-2">
            {plan.takeProfit.map((tp, i) => (
              <span
                className="text-onTertiaryContainer bg-tertiaryContainer rounded-full px-3 py-1"
                key={i}
              >
                {tp}%
              </span>
            ))}
          </div>
        </InfoLine>
      </Card>
    </div>
  );
};

const InfoLine = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center p-2 w-full justify-between text-sm tracking-[0.25px] text-onSurfaceVariant">
    {children}
  </div>
);

export default PlanID;
