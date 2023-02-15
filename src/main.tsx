import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import Plan from "./routes/Plan";
import PlanID from "./routes/PlanId";
import Trades from "./routes/Trades";
import Settings from "./routes/Settings";
import Account from "./routes/Account";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "plan/",
        element: <Plan />,
        children: [
          {
            path: ":planId",
            element: <PlanID />,
          },
        ],
      },
      {
        path: "trades/",
        element: <Trades />,
      },
      {
        path: "settings/",
        element: <Settings />,
      },
      {
        path: "account/",
        element: <Account />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
