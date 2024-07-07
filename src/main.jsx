import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginCard } from "./pages/Login";
import { RegisterCard } from "./pages/register";
import ErrorPage from "./pages/404";
import Home from "./pages/home";
import ProductListCard from "./pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterCard />,
  },
  {
    path: "/login",
    element: <LoginCard />,
  },
  {
    path: "/products",
    element: <ProductListCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
