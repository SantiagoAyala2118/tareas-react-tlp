import { useState } from "react";

export const Counter = () => {
  // const user = {
  //   nombre: "Marcos",
  //   apellido: "Montellano",
  // };

  // const [count, setCount] = useState(initialValue);
  const initialValue = {
    counter1: 10,
    counter2: 20,
    counter3: 30,
  };
  const [counters, setCounters] = useState(initialValue);
  const { counter1, counter2, counter3 } = counters;

  const handleIncrement = () => {
    if (counter1 === 20) return;

    setCounters({
      ...counters,
      counter1: counter1 + 1,
    });
  };

  const handleDecrement = () => {
    if (counter1 === 0) return;

    setCounters({
      ...counters,
      counter1: counter1 - 1,
    });
  };

  const handleReset = () => {
    setCounters(initialValue);
  };

  //* Hice yo
  const handleBigReset = () => {
    setCounters({
      counter1: 0,
      counter2: 0,
      counter3: 0,
    });
  };

  return (
    <>
      {/* <h1>Profe: {JSON.stringify(user)}</h1> */}
      <h1>Contador1: {counter1} </h1>
      <h1>Contador2: {counter2} </h1>
      <h1>Contador3: {counter3} </h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleBigReset}>Big reset</button>
    </>
  );
};
