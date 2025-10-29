import { useForm } from "../hooks/useForm";

// **Register.jsx**

// - Contendrá un formulario con los campos:
//   - username
//   - email
//   - password
//   - firstname
//   - lastname
// - También usará el custom hook useForm.
// - Al hacer submit:
//   - Mostrará los datos del formulario en consola.
//   - Reseteará el formulario.

export const Register = () => {
  const { handleChange, formulario, setFormulario } = useForm();

  return (
    <>
      <form action="#">
        <div>
          <label>Username</label>
          <input type="text" placeholder="Ingrese su nombre de usuario" />
          <br />
          <label>Email</label>
          <input type="text" placeholder="Ingrese su correo" />
          <br />
          <label>Password</label>
          <input type="text" placeholder="Ingrese su contraseña" />
          <br />
          <label>Firstname</label>
          <input type="text" placeholder="Ingrese su primer nombre" />
          <br />
          <label>Lastname</label>
          <input type="text" placeholder="Ingrese su apellido" />
        </div>
      </form>
    </>
  );
};
