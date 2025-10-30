import { useState } from "react";

export const useForm = (initialValue) => {
  const [formulario, setFormulario] = useState(initialValue);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    // console.log(name, value);

    setFormulario({ ...formulario, [name]: value });
  };

  const handleReset = () => {
    setFormulario(initialValue)
  }

  return {
    formulario,
    handleChange,
    handleReset,
    setFormulario
  };
};
