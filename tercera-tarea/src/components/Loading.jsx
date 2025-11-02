import { CharacterInfo } from "./CharacterInfo";

export const Loading = () => {
  return (
    <div className="loading-layout">
      <img
        className="mono-gif"
        src="../../GIF-mono-con-platillos-simpsons.gif"
        alt="Mono con platillos de Los Simpsons"
      />
      <h3>Cargando...</h3>
    </div>
  );
};
