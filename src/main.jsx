import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthProviders from "./providers/AuthProviders";
import Users from "./components/Users";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () =>
          fetch(`https://coffee-store-server-gilt.vercel.app/coffee`),
      },

      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },

      {
        path: "/updatedCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-gilt.vercel.app/coffee/${params.id}`
          ),
      },

      {
        path: "/login",
        element: <SignIn />,
      },

      {
        path: "/register",
        element: <SignUp />,
      },

      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://coffee-store-server-gilt.vercel.app/user"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
