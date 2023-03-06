import { useEffect, useRef, useState } from "react";
import { BacktestForm, Card, Switch } from "../components";
import {
  selectBacktests,
  selectPNL,
  selectWinrate,
  selectWinsAndFailsAmount,
} from "../redux/backtest/selectors";
import { useAppSelector } from "../redux/hooks";

const Backtest = () => {
  const [isAccumulate, setIsAccumulate] = useState(false);
  const tableRef = useRef<HTMLTableSectionElement>(null);
  const backtest = useAppSelector(selectBacktests);
  const pnl = useAppSelector(selectPNL);
  const winrate = useAppSelector(selectWinrate);
  const { wins, fails } = useAppSelector(selectWinsAndFailsAmount);

  useEffect(() => {
    tableRef.current?.lastElementChild?.scrollIntoView();
  }, [backtest]);

  return (
    <div className="bg-surface rounded-t-3xl h-[90%] w-full flex gap-4 p-6">
      <BacktestForm />
      <Card>
        <h3 className="text-2xl text-onSurfaceVariant text-center mb-6">
          Stats
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span className="text-[22px] leading-7 text-onSurfaceVariant">
              Accumulate mode
            </span>
            <Switch
              checked={isAccumulate}
              onChange={() => setIsAccumulate(!isAccumulate)}
            />
          </div>
          <div className="w-full h-[1px] bg-outline" />
          <div className="flex justify-between divide-x divide-outline gap-6 text-onSurfaceVariant">
            <div className="flex flex-col items-center w-max ">
              <span className="text-sm tracking-[0.25px]">Total trades</span>
              <span className="text-[22px] leading-7">
                {backtest.length} ({wins} | {fails})
              </span>
            </div>
            <div className="flex flex-col items-center pl-6 w-max">
              <span className="text-sm tracking-[0.25px]">Winrate</span>
              <span className="text-[22px] leading-7">
                {winrate.toFixed(2)}%
              </span>
            </div>
            <div className="flex flex-col items-center pl-6 w-max">
              <span className="text-sm tracking-[0.25px]">W/L ratio</span>
              <span className="text-[22px] leading-7">
                {(wins / fails).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col items-center pl-6 w-max">
              <span className="text-sm tracking-[0.25px]">Total PNL</span>
              <span className="text-[22px] leading-7">{pnl}%</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="flex-1">
        <h3 className="text-2xl text-onSurfaceVariant text-center mb-6">
          History of trades
        </h3>
        <table className="w-full block">
          <thead className="block">
            <tr className="border-b border-outline text-sm flex">
              <th className="flex-1 border-r border-outline p-2 text-base tracking-[0.15px] font-medium text-onSurfaceVariant">
                #
              </th>
              <th className="flex-1 border-r border-outline p-2 text-base tracking-[0.15px] font-medium text-onSurfaceVariant">
                Entry
              </th>
              <th className="flex-1 border-r border-outline p-2 text-base tracking-[0.15px] font-medium text-onSurfaceVariant">
                Take profit
              </th>
              <th className="flex-1 border-r border-outline p-2 text-base tracking-[0.15px] font-medium text-onSurfaceVariant">
                Stop loss
              </th>
              <th className="flex-1 p-2 text-base tracking-[0.15px] font-medium text-onSurfaceVariant">
                Result
              </th>
              {backtest.length >= 9 && <th className="w-[5px]"></th>}
            </tr>
          </thead>

          <tbody
            className="overflow-auto flex flex-col max-h-[300px]"
            ref={tableRef}
          >
            {backtest.map((item, i) => (
              <tr
                key={i}
                className="odd:bg-surfaceVariant odd:bg-opacity-40 border-b border-outline flex"
              >
                <td className="flex-1 border-r border-outline p-2 text-sm tracking-[0.25px] text-onSurfaceVariant">
                  {i + 1}
                </td>
                <td className="flex-1 border-r border-outline p-2 text-sm tracking-[0.25px] text-onSurfaceVariant">
                  {item.entry}
                </td>
                <td className="flex-1 border-r border-outline p-2 text-sm tracking-[0.25px] text-onSurfaceVariant">
                  {item.tp}
                </td>
                <td className="flex-1 border-r border-outline p-2 text-sm tracking-[0.25px] text-onSurfaceVariant">
                  {item.sl}
                </td>
                <td className="flex-1 p-2 text-sm tracking-[0.25px] text-onSurfaceVariant">
                  {item.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Backtest;
