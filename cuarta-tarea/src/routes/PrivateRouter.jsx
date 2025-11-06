import { Outlet, Navigate } from "react-router";

export const PublicRouter = () => {
  const isLogged = localStorage.getItem("isLogged", "true");
  return isLogged ? <Outlet /> : <Navigate to={"/home"} />;
};
