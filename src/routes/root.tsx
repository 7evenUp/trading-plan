import { Outlet, useLocation } from "react-router-dom";
import { Info, Sidebar } from "../components";

const Root = () => {
  const location = useLocation()
  console.log('Current location are:', location)
  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      {location.pathname === '/' ? (
        <Info />
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default Root