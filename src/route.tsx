import { createBrowserRouter } from "react-router";

import Layout from "./routing/Layout";
import ErrorPage from "./routing/ErrorPage";
import HomePage from "./routing/HomePage";
import Cargo from "./routing/Cargo/Cargo";
import SubmitCargoForm from "./routing/Cargo/SubmitCargo/SubmitCargoForm";

import Drivers from "./routing/Drivers/Drivers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        handle: {
          title: "داشبورد",
        },
      },

      {
        path: "cargo",
        element: <Cargo />,
        handle: {
          title: "سالن اعلام بار",
        },
      },

      {
        path: "cargo/submit",
        element: <SubmitCargoForm />,
        handle: {
          title: "ثبت بار",
          parentTitle: "سالن اعلام بار",
        },
      },

      {
        path: "drivers",
        element: <Drivers />,
        handle: {
          title: "رانندگان",
        },
      },
      {
        path: "notice",
        element: <HomePage />,
        handle: {
          title: "باخبر شو",
        },
      },

      {
        path: "sendMessage",
        element: <HomePage />,
        handle: {
          title: "ارسال پیامک",
        },
      },
      {
        path: "transportCompanies",
        element: <HomePage />,
        handle: {
          title: "متصدیان",
        },
      },
    ],
  },
]);

export default router;
