export const CharacterInfo = ({ onData, onCount }) => {
  return (
    <div>
      <img
        src={`https://cdn.thesimpsonsapi.com/200/character/${onCount}.webp`}
        alt="Personaje de los Simpsons"
      />
      <h2>{onData?.name}</h2>
    </div>
  );
};
