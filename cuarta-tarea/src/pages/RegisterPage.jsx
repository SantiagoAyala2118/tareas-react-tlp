import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { handleChange, formulario } = useForm({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formulario.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div>
          <label>Pasword</label>
          <input
            type="text"
            name="password"
            value={formulario.password}
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <div>
          <label>Firstname</label>
          <input
            type="text"
            name="firstName"
            value={formulario.firstName}
            onChange={handleChange}
            placeholder="firstName"
          />
        </div>
        <div>
          <label>Lastname</label>
          <input
            type="text"
            name="lastName"
            value={formulario.lastName}
            onChange={handleChange}
            placeholder="lastName"
          />
        </div>

        <button type="submit"></button>
      </form>
    </>
  );
};
