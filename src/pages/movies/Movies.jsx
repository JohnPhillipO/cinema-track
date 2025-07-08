import { useEffect, useState } from "react";
import movieHeroImage from "../../assets/movie-hero.jpg";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // trim the search value
    const searchValue = e.target.search.value.trim().toLowerCase();
    // if the search value is empty, set the error and return
    if (!searchValue) {
      setMovies([]);
      setError("Please enter a search term.");
      return;
    }
    try {
      setError("");
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${searchValue}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
        e.target.search.value = "";
      } else {
        setMovies([]);
        setError(data.Error || "No results found.");
      }
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);
      setError("Failed to fetch movies. Please try again later.");
    }
  };
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <div className="w-screen h-1/4 sm:h-1/3 absolute top-0 left-0 z-0 dark:brightness-30">
        <img
          src={movieHeroImage}
          alt="movie hero"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Search bar */}
      <form
        className="flex justify-center items-center absolute top-68 sm:top-98 w-full"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          name="search"
          placeholder="Search for a movie"
          className="w-1/2 p-2 rounded-md bg-white shadow-md rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none py-3 px-4 border-1 border-gray-400"
        />
        <button
          type="submit"
          className="bg-gray-200 text-gray-900 p-2 rounded-br-md rounded-tr-md rounded-tl-none rounded-bl-none shadow-md px-5 py-3 font-semibold cursor-pointer hover:bg-gray-300 transition-all duration-300 border-t-1 border-r-1 border-b-1 border-l-0 border-gray-400"
        >
          Search
        </button>
      </form>
      {/* Movies */}
      {error && <div className="text-red-500 font-semibold my-4">{error}</div>}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {movies.map((movie) => (
          <h1 key={movie.imdbID}>{movie.Title}</h1>
        ))}
      </div>
    </section>
  );
}
