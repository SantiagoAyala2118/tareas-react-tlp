import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { handleChange, handleSubmit, formulario } = useForm({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

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
            name="username"
            value={formulario.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>
        <div>
          <label>Pasword</label>
          <input
            type="text"
            name="username"
            value={formulario.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>
        <div>
          <label>Firstname</label>
          <input
            type="text"
            name="username"
            value={formulario.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>
        <div>
          <label>Lastname</label>
          <input
            type="text"
            name="username"
            value={formulario.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>
      </form>
    </>
  );
};
