import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";

export const MultipleCustomHooks = () => {
  const { count, handleIncrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <>
      <h1>Los Simpsons API</h1>
      <h2>Personajes</h2>

      <Loading onLoading={isLoading} onData={data} onCount={count} />

      <button onClick={() => handleIncrement(1)}>Siguiente</button>
    </>
  );
};
