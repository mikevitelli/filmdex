export default function Films({ films }) {
  return (
    <div>
      <h1>Films</h1>

      <ul>
        {films.map((film) => (
          <li>
            <h2>{film.name}</h2>
            <h3>{film.brand}</h3>
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
