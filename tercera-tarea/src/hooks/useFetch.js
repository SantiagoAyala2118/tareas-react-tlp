import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const { data, isLoading } = state;

  const getFetch = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });

      const res = await fetch(url);
      const data = await res.json();

      console.log(data.portrait_path);

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

  return {
    data,
    isLoading,
  };
};
