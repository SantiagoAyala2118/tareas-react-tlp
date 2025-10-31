import { useCounter } from "../hooks/useCounter";

export const Profile = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounter(10);

  return (
    <>
      <h1>Este es un perfil</h1>
      <p>Contador: {count}</p>
      <button onClick={() => handleIncrement(5)}>+1</button>
      <button onClick={() => handleDecrement(10)}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};
