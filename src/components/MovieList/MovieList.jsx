import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ items }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {items.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
