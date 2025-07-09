import PomodoroTimer from "../components/PomodoroTimer/PomodoroTimer";
import { useEffect } from "react";
import { createContext, useState } from "react";
import SettingsModal from "../components/PomodoroTimer/SettingsModal";
import MovieCard from "../components/MovieCard";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import usePomodoroTimer from "../hooks/usePomodoroTimer";

export default function Timer() {
  const [showSettings, setShowSettings] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const rewards = JSON.parse(localStorage.getItem("rewards")) || 0;

  useEffect(() => {
    // get watchlist from local storage on first render
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  }, []);

  // Default timer settings
  const [timerSettings, setTimerSettings] = useState({
    focusTime: 1500,
    breakTime: 300,
    longBreakTime: 900,
    pomodoros: 4,
    autoplay: true,
    sound: true,
  });

  // Pagination (Limit to 3 movies per page)
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = watchlist.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(watchlist.length / moviesPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <TimerContext.Provider
      value={{ showSettings, timerSettings, setShowSettings, setTimerSettings }}
    >
      <div className="flex md:flex-row flex-col items-center justify-center h-screen px-6 gap-8">
        <section className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-4xl font-bold pb-10">Pomodoro Timer</h1>
          <PomodoroTimer />
        </section>
        {/* Watchlist section */}
        <section className="flex flex-col items-center justify-center h-screen text-center w-2/4">
          <h1 className="text-4xl font-bold pb-2">Watchlist Movies</h1>
          <p>
            Complete a pomodoro to <strong>unlock</strong> a movie
          </p>
          <div className="flex flex-col items-center justify-center mt-10 text-center">
            {currentMovies.length > 0 ? (
              <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl">
                {currentMovies.map((movie, index) => {
                  // if rewards is less than index, then opacity 50.
                  // Since its paginated, if rewards is less than the other page, we should disable the rest of the movies.
                  // Disable the rest of the movies on the current page.
                  const globalIndex = (currentPage - 1) * moviesPerPage + index;
                  const isLocked = globalIndex >= rewards;
                  return (
                    <div
                      key={index}
                      className={`${isLocked ? "opacity-50" : ""}`}
                    >
                      <MovieCard key={movie.imdbID} movie={movie} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-gray-500 my-4">
                <a href="/movies" className="underline font-bold">
                  movies
                </a>
                in your watchlist.
              </div>
            )}
          </div>
          {watchlist.length > 3 && (
            <div className="flex flex-col items-center justify-center gap-4 mt-10">
              <p className="text-gray-500 text-sm">
                Page {currentPage} of {totalPages}
              </p>
              <div className="flex flex-row items-center justify-center gap-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium rounded-lg cursor-pointer bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaLongArrowAltLeft />
                  <span className="ms-2">Previous</span>
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center px-4 h-10 text-base font-medium rounded-lg cursor-pointer bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="mr-2">Next</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          )}
        </section>
        <div
          className={
            showSettings
              ? "fixed top-0 right-0 w-full h-full bg-black/50 flex justify-center items-center"
              : "hidden"
          }
          onClick={() => setShowSettings(false)}
        >
          {showSettings && (
            <div onClick={(event) => event.stopPropagation()}>
              <SettingsModal />
            </div>
          )}
        </div>
      </div>
    </TimerContext.Provider>
  );
}

export const TimerContext = createContext();
