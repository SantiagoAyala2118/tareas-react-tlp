import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";

export const MultipleCustomHooks = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <div className="container">
      <h1>Los Simpsons API</h1>
      <h2>Personajes</h2>

      <Loading onLoading={isLoading} onData={data} onCount={count} />

      <div className="button-container">
        <button
          className="character-button"
          onClick={() => handleDecrement(1)}
          disabled={isLoading === true || count === 1 ? true : false}
        >
          Anterior
        </button>
        <button
          className="character-button"
          onClick={() => handleIncrement(1)}
          disabled={isLoading}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
