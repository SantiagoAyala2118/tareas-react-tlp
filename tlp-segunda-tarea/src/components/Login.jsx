import { useForm } from "../hooks/useForm";
import "../App.css";

// **Login.jsx**

// - Contendrá un formulario con los campos:
//   - email
//   - password
// - Utilizará el custom hook `useForm` para manejar los datos.
// - Al hacer submit:
//   - Ejecutará una función que:
//     - Resetea el formulario.
//     - Envía el username al componente padre (App.jsx) mediante una función pasada por props.

export const Login = ({ onLogin }) => {
  const { handleChange, formulario, handleSubmit } = useForm({
    username: "",
    password: "",
  });

  return (
    <>
      <form
        action="#"
        className="login"
        onSubmit={(e) => (handleSubmit(e), onLogin(formulario.username))}
      >
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formulario.username}
          className="input"
          placeholder="Introduce tu nombre de usuario"
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={formulario.password}
          className="input"
          placeholder="Introduce tu contraseña"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
