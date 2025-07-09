import { useEffect, useState } from "react";
import { FiPlus, FiCheck } from "react-icons/fi";

export default function MovieCard({ movie }) {
  const [inWatchlist, setInWatchlist] = useState(false);
  const currentURL = window.location.pathname;

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    // Every time the movie.imdbID changes (When card is rendered), check if the movie is in the watchlist
    setInWatchlist(watchlist.some((m) => m.imdbID === movie.imdbID)); // if it is, set inWatchlist to true
    // Which means the button will show the check icon
  }, [movie.imdbID]);

  const handleToggleWatchlist = () => {
    // Get the current watchlist from local storage. If nothing is in there, create an empty array.
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (inWatchlist) {
      // Remove from watchlist
      const updated = watchlist.filter((m) => m.imdbID !== movie.imdbID);
      localStorage.setItem("watchlist", JSON.stringify(updated));
      // Change icon to plus
      setInWatchlist(false);
    } else {
      // Add to watchlist
      const updated = [...watchlist, movie];
      localStorage.setItem("watchlist", JSON.stringify(updated));
      // Change icon to check
      setInWatchlist(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 relative">
      {currentURL !== "/timer" && (
        <button
          aria-label={
            inWatchlist ? "Remove from Watchlist" : "Save to Watchlist"
          }
          className={`absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md group transition-colors duration-200 ${
            inWatchlist ? "hover:bg-blue-600" : "hover:bg-blue-600"
          }`}
          style={{ outline: "none" }}
          onClick={handleToggleWatchlist}
        >
          {inWatchlist ? (
            <FiCheck
              className="text-blue-600 group-hover:text-white"
              size={20}
            />
          ) : (
            <FiPlus
              className="text-blue-600 group-hover:text-white"
              size={20}
            />
          )}
        </button>
      )}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-52 h-72 object-cover rounded-md"
      />
      <h1 className="text-lg font-bold truncate w-52">{movie.Title}</h1>
      <p className="text-sm text-gray-500">{movie.Year}</p>
    </div>
  );
}
