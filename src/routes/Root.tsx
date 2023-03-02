import { Outlet, useLocation } from "react-router-dom";
import { Info, Sidebar } from "../components";

const Root = () => {
  const location = useLocation()
  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      {location.pathname === '/' ? (
        <Info />
      ) : (
        <div className="flex-1 min-h-screen flex items-end bg-surfaceVariant">
          <Outlet />
        </div>
      )}
    </div>
  )
}

export default Root
