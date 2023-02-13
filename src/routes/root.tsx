import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const Root = () => {
  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Root