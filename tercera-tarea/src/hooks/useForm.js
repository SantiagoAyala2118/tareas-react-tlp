import { useState } from "react";
export const useForm = (initialState = { usuario: "", password: "" }) => {
  const [formulario, setFormulario] = useState({
    usuario: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return {
    handleChange,
    formulario,
    setFormulario,
  };
};
