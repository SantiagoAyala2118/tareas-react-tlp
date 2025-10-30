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
  const { handleChange, handleReset, formulario } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  return (
    <>
      <form action="#" className="register">
        <div>
          <label>Username</label>
          <input
            type="text"
            className="input"
            name="username"
            value={formulario.username}
            placeholder="Ingrese su nombre de usuario"
            onChange={handleChange}
          />
          <br />
          <label>Email</label>
          <input
            type="text"
            className="input"
            name="email"
            value={formulario.email}
            placeholder="Ingrese su correo"
            onChange={handleChange}
          />
          <br />
          <label>Password</label>
          <input
            type="text"
            className="input"
            name="password"
            value={formulario.password}
            placeholder="Ingrese su contraseña"
            onChange={handleChange}
          />
          <br />
          <label>Firstname</label>
          <input
            type="text"
            className="input"
            name="firstname"
            value={formulario.firstname}
            placeholder="Ingrese su primer nombre"
            onChange={handleChange}
          />
          <br />
          <label>Lastname</label>
          <input
            type="text"
            className="input"
            name="lastname"
            value={formulario.lastname}
            placeholder="Ingrese su apellido"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(formulario);
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
