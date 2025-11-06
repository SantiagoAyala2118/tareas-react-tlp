import { Outlet, Navigate } from "react-router";

export const PrivateRouter = () => {
  const isLogged = localStorage.getItem("isLogged", "true");
  console.log(isLogged);
  return isLogged ? <Outlet /> : <Navigate to={"/register"} />;
};
