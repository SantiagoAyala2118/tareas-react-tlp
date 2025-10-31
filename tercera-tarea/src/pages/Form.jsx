import { useForm } from "../hooks/useForm";

export const Form = () => {
  const { handleChange, formulario } = useForm();

  //   const [formulario, setFormulario] = useState({
  //     usuario: "",
  //     password: "",
  //   });

  //   const handleChange = (event) => {
  //     console.log(event.target.name, event.target.value);
  //     setFormulario({
  //       ...formulario,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  return (
    <div>
      <input
        type="text"
        name="usuario"
        value={formulario.usuario}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={formulario.password}
        onChange={handleChange}
      />

      <button onClick={() => console.log(formulario)}>Ver datos</button>
    </div>
  );
};
