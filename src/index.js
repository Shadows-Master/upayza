import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import {
  AppView,
  Company,
  Contacts,
  Home,
  Network,
  Services,
  WhoWeServe,
  Main,
  About,
  Teams,
  CrossBorderMoney,
  InteroperableMobile,
} from "./views";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <AppView />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/company",
        element: <Company />,
        children: [
          { path: "/company/about", element: <About /> },
          { path: "/company/our-team", element: <Teams /> },
        ],
      },

      {
        path: "/services",
        element: <Services />,
        children: [
          {
            path: "/services/cross-border-money",
            element: <CrossBorderMoney />,
          },
          {
            path: "/services/interoperable-mobile-payment",
            element: <InteroperableMobile />,
          },
        ],
      },
      { path: "/who-we-serve", element: <WhoWeServe /> },
      { path: "/network", element: <Network /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
