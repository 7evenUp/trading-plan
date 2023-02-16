import { NavLink } from "react-router-dom";
import { HomeSimple, Presentation, GraphUp, Settings, User } from "iconoir-react";

const Sidebar = () => {
  return (
    <div className="bg-orange-300 p-4">
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className="flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <div
                    className={`py-1 px-4 rounded-full ${
                      isActive
                        ? "bg-orange-500 hover:bg-orange-600"
                        : " hover:bg-slate-300"
                    }`}
                  >
                    <HomeSimple />
                  </div>
                  <span>Home</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"plan"} className="flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <div
                    className={`py-1 px-4 rounded-full ${
                      isActive
                        ? "bg-orange-500 hover:bg-orange-600"
                        : " hover:bg-slate-300"
                    }`}
                  >
                    <Presentation />
                  </div>
                  <span>Plan</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"trades"} className="flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <div
                    className={`py-1 px-4 rounded-full ${
                      isActive
                        ? "bg-orange-500 hover:bg-orange-600"
                        : " hover:bg-slate-300"
                    }`}
                  >
                    <GraphUp />
                  </div>
                  <span>Trades</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"settings"} className="flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <div
                    className={`py-1 px-4 rounded-full ${
                      isActive
                        ? "bg-orange-500 hover:bg-orange-600"
                        : " hover:bg-slate-300"
                    }`}
                  >
                    <Settings />
                  </div>
                  <span>Settings</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"account"} className="flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <div
                    className={`py-1 px-4 rounded-full ${
                      isActive
                        ? "bg-orange-500 hover:bg-orange-600"
                        : " hover:bg-slate-300"
                    }`}
                  >
                    <User />
                  </div>
                  <span>Account</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
