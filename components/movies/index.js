"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

function MoviesComponent() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    };
    return () => {
      fetchMovies();
    };
  }, []);

  return (
    <div className={styles.moviesWrapper}>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <Link href={"/"}>
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesComponent;
