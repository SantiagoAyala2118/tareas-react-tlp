import { useState, useEffect } from "react";
import { useCounter } from "./useCounter";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const { data, isLoading } = state;

  const { count, handleIncrement } = useCounter(1);

  const getFetch = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });

      const res = await fetch(url);
      const data = await res.json();

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setState({
        data: data,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error al obtener los datos de los personajes", err);
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {};
};
