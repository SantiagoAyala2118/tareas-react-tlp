import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
// import "../styles/characters.css";
// import "../styles/loading.css";
import { CharacterInfo } from "../components/CharacterInfo";

export const HomePage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <div className="container">
      <h1>Los Simpsons API</h1>
      <h2>Personaje</h2>

      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <CharacterInfo onData={data} onCount={count} />
        )}
      </div>

      <div className="button-container">
        <button
          className="character-button"
          onClick={() => handleDecrement(1)}
          disabled={isLoading || count === 1 ? true : false}
          style={{
            backgroundColor: isLoading || count === 1 ? "gray" : "yellow",
          }}
        >
          Anterior
        </button>
        <button
          className="character-button"
          onClick={() => handleIncrement(1)}
          disabled={isLoading}
          style={{ backgroundColor: isLoading ? "gray" : "yellow" }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
