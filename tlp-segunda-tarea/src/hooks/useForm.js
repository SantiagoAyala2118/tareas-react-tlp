import { useState } from "react";

export const useForm = (initialValue) => {
  const [formulario, setFormulario] = useState(initialValue);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    // console.log(name, value);

    setFormulario({ ...formulario, [name]: value });
  };

  const handleReset = () => {
    setFormulario(initialValue);
  };

  const handleSubmit = (e, onLogin) => {
    e.preventDefault();
    handleReset();
    onLogin(formulario.username);
  };

  return {
    formulario,
    handleChange,
    handleReset,
    setFormulario,
    handleSubmit,
  };
};
