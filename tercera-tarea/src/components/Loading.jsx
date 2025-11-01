import { CharacterInfo } from "./CharacterInfo";

export const Loading = ({ onLoading, onData, onCount }) => {
  return (
    <>
      {onLoading ? (
        <h3>Cargando...</h3>
      ) : (
        <h3>
          <CharacterInfo onData={onData} onCount={onCount} />
        </h3>
      )}
    </>
  );
};
