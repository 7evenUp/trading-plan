import { useEffect, useRef, useState } from "react";
import { BacktestForm, Card, Switch } from "../components";
import {
  selectBacktests,
  selectPNL,
  selectWinrate,
  selectWinsAndFailsAmount,
} from "../redux/backtest/selectors";
import { useAppSelector } from "../redux/hooks";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    x: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    x: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    x: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: 'Page D',
    x: 2780,
    pv: 3908,
    amt: 3000,
  },
  {
    name: 'Page E',
    x: 1890,
    pv: 4800,
    amt: 3181,
  },
  {
    name: 'Page F',
    x: 2390,
    pv: 3800,
    amt: 3500,
  },
  {
    name: 'Page G',
    x: 3490,
    pv: 4300,
    amt: 3100,
  },
];

const Backtest = () => {
  const [isAccumulate, setIsAccumulate] = useState(false);
  const tableRef = useRef<HTMLTableSectionElement>(null);
  const backtest = useAppSelector(selectBacktests);
  const pnl = useAppSelector((state) => selectPNL(state, isAccumulate));
  const winrate = useAppSelector(selectWinrate);
  const { wins, fails } = useAppSelector(selectWinsAndFailsAmount);

  useEffect(() => {
    tableRef.current?.lastElementChild?.scrollIntoView();
  }, [backtest]);

  return (
    <div className="bg-surface rounded-t-3xl h-[90%] w-full flex gap-4 p-6">
      <BacktestForm />

      {backtest.length ? (
        <>
        <div className="flex flex-col">
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
                  <span className="text-sm tracking-[0.25px]">
                    Total trades
                  </span>
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
          
          <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="x" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#822a2d" />
        </LineChart>
      </ResponsiveContainer>
          </div>

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
        </>
      ) : (
        <Card className="flex-1">
          <h3 className="text-2xl text-onSurfaceVariant text-center">
            Add your first trade to see statistics
          </h3>
        </Card>
      )}
    </div>
  );
};

export default Backtest;
