import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-orange-300">
      <h1>Sidebar Trade Plan</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"plan"}
              className={({ isActive, isPending }) =>
                isActive ? "bg-violet-300" : isPending ? "bg-orange-300" : ""
              }
            >
              Plan
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"trades"}
              className={({ isActive, isPending }) =>
                isActive ? "bg-violet-300" : isPending ? "bg-orange-300" : ""
              }
            >
              Trades
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"settings"}
              className={({ isActive, isPending }) =>
                isActive ? "bg-violet-300" : isPending ? "bg-orange-300" : ""
              }
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"account"}
              className={({ isActive, isPending }) =>
                isActive ? "bg-violet-300" : isPending ? "bg-orange-300" : ""
              }
            >
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
