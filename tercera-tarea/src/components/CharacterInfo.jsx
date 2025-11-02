export const CharacterInfo = ({ onData, onCount }) => {
  return (
    <div>
      <div className="image-container">
        <img
          src={`https://cdn.thesimpsonsapi.com/200/character/${onCount}.webp`}
          alt="Personaje de los Simpsons"
        />
      </div>
      <h2>{onData?.name}</h2>
      <h3>{onData?.description}</h3>
    </div>
  );
};
