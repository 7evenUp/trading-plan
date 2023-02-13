import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const Root = () => {
  return (
    <>
      <h1>Hello, Trading Plan <strong>User</strong></h1>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default Root