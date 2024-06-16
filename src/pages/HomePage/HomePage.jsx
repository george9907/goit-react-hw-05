import { lazy, useEffect, useState } from "react";
import { getMovies } from "../../movie-api.js";
const MovieList = lazy(() =>
  import("../../components/MovieList/MovieList.jsx")
);
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        setIsError(false);
        const moviesData = await getMovies();
        setTrendMovies(moviesData);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);
  return (
    <section className={css.container}>
      <h2 className={css.title}>Trending today</h2>
      <MovieList items={trendMovies} />
      {loading && <Loader />}
      {isError && <ErrorMessage />}
    </section>
  );
}
