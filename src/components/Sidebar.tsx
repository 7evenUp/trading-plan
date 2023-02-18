import { NavLink as RouterNavLink } from "react-router-dom";
import {
  HomeSimple,
  Presentation,
  GraphUp,
  Settings,
  User,
  StatsReport,
} from "iconoir-react";

const Sidebar = () => {
  return (
    <div className="bg-surfaceVariant p-3 flex items-center">
      <nav>
        <ul className="flex flex-col items-center gap-3 justify-center">
          <li>
            <NavLink to="/" link={<HomeSimple />} title="Home" />
          </li>
          <li>
            <NavLink to="plan" link={<Presentation />} title="Plan" />
          </li>
          <li>
            <NavLink to="trades" link={<GraphUp />} title="Trades" />
          </li>
          <li>
            <NavLink to="backtesting" link={<StatsReport />} title="Backtest" />
          </li>
          <li>
            <NavLink to="settings" link={<Settings />} title="Settings" />
          </li>
          <li>
            <NavLink to="account" link={<User />} title="Account" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

const NavLink = ({
  to,
  link,
  title,
}: {
  to: string;
  link: React.ReactNode;
  title: string;
}) => {
  return (
    <RouterNavLink to={to} className="group flex flex-col items-center gap-1">
      {({ isActive }) => (
        <>
          <div
            className={`py-1 px-4 rounded-full transition-all ${
              isActive
                ? "bg-primaryContainer group-hover:bg-primary group-hover:bg-opacity-10 group-active:bg-opacity-20"
                : "group-hover:bg-onSurfaceVariant group-hover:bg-opacity-10 group-active:bg-opacity-20"
            }`}
          >
            <span
              className={
                isActive ? "text-onPrimaryContainer" : "text-onSurfaceVariant"
              }
            >
              {link}
            </span>
          </div>
          <span
            className={`font-medium text-xs tracking=[0.5px] ${
              isActive ? "text-onSurface" : "text-onSurfaceVariant"
            }`}
          >
            {title}
          </span>
        </>
      )}
    </RouterNavLink>
  );
};

export default Sidebar;
