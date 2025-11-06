import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const Navbar = () => {
  const { handleLogout } = useForm({});
  const navigate = useNavigate("/home");

  return (
    <>
      <div>
        <nav className="bg-blue-500 w-full flex flex-col items-center">
          <h1>Bienvenido</h1> <br />
          <div className=" w-100 flex items-center place-content-between ">
            <button className="border rounded-sm bg-yellow-400 hover:cursor-pointer">
              HOME
            </button>
            <button
              className="border rounded-sm bg-yellow-400 hover:cursor-pointer"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
