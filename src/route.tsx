import { createBrowserRouter } from "react-router";

import Layout from "./routing/Layout";
import ErrorPage from "./routing/ErrorPage";
import HomePage from "./routing/HomePage";
import Cargo from "./routing/Cargo/Cargo";
import SubmitCargoForm from "./routing/Cargo/SubmitCargo/SubmitCargoForm";

import Drivers from "./routing/Drivers/Drivers";
import TransportCompanies from "./routing/TransportCompanies/TransportCompanies";
import LetMeKnow from "./routing/LetmeKnow/LetMeKnow";
import SubmitLetMeKnowForm from "./routing/LetmeKnow/SubmitLetMeKnowForm";
import SendMessage from "./routing/SendMessage/SendMessage";
import Login from "./routing/Login/Login";

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
        path: "letmeknow",
        element: <LetMeKnow />,
        handle: {
          title: "باخبر شو",
        },
      },

      {
        path: "letmeknow/submit",
        element: <SubmitLetMeKnowForm />,
        handle: {
          title: "ثبت باخبر شو",
          parentTitle: "باخبر شو",
        },
      },

      {
        path: "sendMessage",
        element: <SendMessage />,
        handle: {
          title: "ارسال پیامک",
        },
      },
      {
        path: "transportCompanies",
        element: <TransportCompanies />,
        handle: {
          title: "متصدیان",
        },
      },
      {
        path: "login",
        element: <Login />,
        handle: {
          title: "Login",
        },
      },
    ],
  },
]);

export default router;
