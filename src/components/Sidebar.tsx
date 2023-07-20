import { NavLink as RouterNavLink } from "react-router-dom"
import {
  HomeSimple,
  Presentation,
  GraphUp,
  Settings,
  User,
  StatsReport,
} from "iconoir-react"
import clsx from "clsx"

const Sidebar = () => {
  return (
    <div className="bg-surface p-3 flex items-center">
      <nav>
        <ul className="flex flex-col items-center gap-3 justify-center">
          <li>
            <NavLink to="/" icon={<HomeSimple />} title="Home" />
          </li>
          <li>
            <NavLink to="plan" icon={<Presentation />} title="Plan" />
          </li>
          <li>
            <NavLink to="trades" icon={<GraphUp />} title="Trades" />
          </li>
          <li>
            <NavLink to="backtest" icon={<StatsReport />} title="Backtest" />
          </li>
          <li>
            <NavLink to="settings" icon={<Settings />} title="Settings" />
          </li>
          <li>
            <NavLink to="account" icon={<User />} title="Account" />
          </li>
        </ul>
      </nav>
    </div>
  )
}

const NavLink = ({
  to,
  icon,
  title,
}: {
  to: string
  icon: React.ReactNode
  title: string
}) => {
  return (
    <RouterNavLink to={to} className="group flex flex-col items-center gap-1">
      {({ isActive }) => (
        <>
          <div
            className={clsx(
              "py-1 px-4 rounded-full transition-all",
              isActive
                ? "bg-secondaryContainer group-hover:bg-secondary group-hover:bg-opacity-30 group-active:bg-opacity-20"
                : "group-hover:bg-onSurfaceVariant group-hover:bg-opacity-10 group-active:bg-opacity-20"
            )}
          >
            <span
              className={
                isActive ? "text-onSecondaryContainer" : "text-onSurfaceVariant"
              }
            >
              {icon}
            </span>
          </div>
          <span
            className={clsx(
              "font-medium text-xs tracking=[0.5px]",
              isActive ? "text-onSurface" : "text-onSurfaceVariant"
            )}
          >
            {title}
          </span>
        </>
      )}
    </RouterNavLink>
  )
}

export default Sidebar
