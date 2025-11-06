import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
// import "../styles/characters.css";
// import "../styles/loading.css";
import { CharacterInfo } from "../components/CharacterInfo";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-red-300">Los Simpsons API</h1>
        <h2 className="text-red-300">Personaje</h2>
      </div>

      <div className="flex flex-col items-center">
        {isLoading ? (
          <Loading />
        ) : (
          <CharacterInfo onData={data} onCount={count} />
        )}
      </div>

      <div className="flex items-center place-content-center">
        <button
          className="hover:cursor-pointer hover:bg-amber-500 border rounded-sm bg-yellow-400 mr-30"
          onClick={() => handleDecrement(1)}
          disabled={isLoading || count === 1 ? true : false}
          style={{
            backgroundColor: isLoading || count === 1 ? "gray" : "yellow",
          }}
        >
          Anterior
        </button>
        <button
          className="hover:cursor-pointer hover:bg-amber-500 border rounded-sm bg-yellow-400"
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
