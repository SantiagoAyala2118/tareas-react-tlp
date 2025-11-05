import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const { formulario, handleSubmit, handleChange } = useForm({
    username: "",
    password: "",
  });

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={formulario.password}
            onChange={handleChange}
            placeholder="password"
          />
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};
