import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // get watchlist from local storage on first render
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-8">Watchlist Page</h1>
      {watchlist.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl">
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 font-semibold my-4">
          No movies in your watchlist.
        </div>
      )}
    </section>
  );
}
