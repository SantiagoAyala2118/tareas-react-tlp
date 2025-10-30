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
  const { handleChange, handleReset, formulario } = useForm({});

  return (
    <>
      <form action="#" className="register">
        <div>
          <label>Username</label>
          <input
            type="text"
            className="input"
            name="username"
            placeholder="Ingrese su nombre de usuario"
          />
          <br />
          <label>Email</label>
          <input
            type="text"
            className="input"
            name="email"
            placeholder="Ingrese su correo"
          />
          <br />
          <label>Password</label>
          <input
            type="text"
            className="input"
            name="password"
            placeholder="Ingrese su contraseña"
          />
          <br />
          <label>Firstname</label>
          <input
            type="text"
            className="input"
            name="firstname"
            placeholder="Ingrese su primer nombre"
          />
          <br />
          <label>Lastname</label>
          <input
            type="text"
            className="input"
            name="lastname"
            placeholder="Ingrese su apellido"
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleReset();
            }}
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
