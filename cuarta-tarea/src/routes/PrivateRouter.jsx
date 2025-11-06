import { Outlet, Navigate } from "react-router";
import { Navbar } from "../components/Navbar";

export const PrivateRouter = () => {
  const isLogged = localStorage.getItem("isLogged", "true");
  console.log(isLogged);
  return isLogged ? (
    <>
      <Navbar />,
      <Outlet />
    </>
  ) : (
    <Navigate to={"/register"} />
  );
};
