import { useState } from "react";

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  // const [name, setName] = useState(initialName);

  const handleIncrement = (number) => {
    // if (count > 15) setName((name) => (name = "S4N-T1"));
    if (count === 20) return;

    setCount(count + number);
  };

  const handleDecrement = (number) => {
    // if (count < 15) setName((name) => (name = initialName));
    const resta = count - number;

    if (resta < 0) return;

    if (count === 0) return;

    setCount(count - number);
  };

  const handleReset = () => {
    setCount(initialValue);
    // setName(initialName);
  };

  return {
    // name,
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};
