export const CharacterInfo = ({ onData, onCount }) => {
  return (
    <div>
      <div className="image-container">
        <img
          src={`https://cdn.thesimpsonsapi.com/200/character/${onCount}.webp`}
          alt="Personaje de los Simpsons"
        />
      </div>
      <div className="character-name">
        <h2>{onData?.name}</h2>
      </div>
      <h3>Description: {onData?.description}</h3>
      <p className="character-status">
        Status
        <span>
          <p style={{ color: onData?.status === "Alive" ? "green" : red }}>
            {onData?.status}
          </p>
        </span>
      </p>
    </div>
  );
};
