import { useState } from "react";
import { useNavigate } from "react-router";

export const useForm = (initialValue) => {
  const [formulario, setFormulario] = useState(initialValue);

  const navigate = useNavigate();

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
    // onLogin(formulario.username);

    localStorage.setItem("isLogged", "true")

    navigate('/home');
  };

  return {
    formulario,
    handleChange,
    handleReset,
    setFormulario,
    handleSubmit,
  };
};
