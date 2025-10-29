import { useState } from "react";

export const useForm = (initialValue) => {
  const [formulario, setFormulario] = useState(
    (initialValue = {
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    })
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;

    console.log(name, value);
    setFormulario({ ...formulario, [name]: value });
  };

  return {
    handleChange,
    formulario,
    setFormulario,
  };
};
