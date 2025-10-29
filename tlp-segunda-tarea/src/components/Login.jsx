import { useForm } from "../hooks/useForm";

// **Login.jsx**

// - Contendrá un formulario con los campos:
//   - email
//   - password
// - Utilizará el custom hook `useForm` para manejar los datos.
// - Al hacer submit:
//   - Ejecutará una función que:
//     - Resetea el formulario.
//     - Envía el username al componente padre (App.jsx) mediante una función pasada por props.

export const Login = () => {
  const { handleChange, formulario, setFormulario } = useForm();

  return (
    <>
      <form action="#">
        <label>
          <p>Email</p>
        </label>
        <input
          type="text"
          name="email"
          value={formulario.email}
          placeholder="Introduce tu email"
          onChange={handleChange}
        />
        <br />
        <label>
          <p>Password</p>
        </label>
        <input
          type="text"
          name="password"
          value={formulario.password}
          placeholder="Introduce tu contraseña"
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={console.log(formulario)}>
          Enviar
        </button>
      </form>
    </>
  );
};
