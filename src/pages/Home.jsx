import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const transition = {
    duration: 1,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen text-center font-inter bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <h1 className="text-7xl font-bold font-inter">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-300">
              Earn your screen time.
            </span>
          </h1>
        </motion.div>
        <p className="text-gray-950 mt-4 max-w-2xl font-inter text-lg leading-[1.5]">
          Work smart. Watch guilt-free. Track your progress and enjoy screen
          time - when you've earned it.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-3xl mt-10 cursor-pointer font-inter text-lg hover:bg-blue-600 transition-all duration-200"
            onClick={() => navigate("/timer")}
          >
            Get Started
          </button>
        </motion.div>
      </section>
      {/* Features */}
      <section className="w-full bg-white flex flex-col items-center h-screen text-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-15 text-gray-900 font-inter">
          What you can do
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full px-4">
          {/* Pomodoro Timer */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center shadow-md transition-all duration-200 border border-gray-100"
          >
            <span className="text-blue-500 text-5xl mb-4">
              <i className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </i>
            </span>
            <h3 className="font-semibold text-xl mb-2 text-center">
              🕓 Stay Focused with the Built-in Pomodoro Timer
            </h3>
            <ul className="text-gray-700 text-left list-disc pl-5 space-y-1">
              <li>Customize work and break durations</li>
              <li>Get subtle audio cues when it's time to take a break</li>
              <li>Track how many sessions you've completed</li>
            </ul>
          </motion.div>
          {/* Watchlist */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center shadow-md transition-all duration-200 border border-gray-100"
          >
            <span className="text-pink-500 text-5xl mb-4">
              <i className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75v16.5m0 0l-7.5-7.5m7.5 7.5l7.5-7.5"
                  />
                </svg>
              </i>
            </span>
            <h3 className="font-semibold text-xl mb-2 text-center">
              🎥 Build and Manage Your Watchlist
            </h3>
            <ul className="text-gray-700 text-left list-disc pl-5 space-y-1">
              <li>Search for movies and shows using TMDB</li>
              <li>Add them to your to-watch list with a single click</li>
              <li>Mark content as watched and rate it afterward</li>
              <li>Add personal notes or custom tags</li>
            </ul>
          </motion.div>
          {/* Reward Yourself */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center shadow-md transition-all duration-200 border border-gray-100"
          >
            <span className="text-yellow-500 text-5xl mb-4">
              <i className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.25l6.16 3.24-1.18-6.88 5-4.87-6.91-1-3.09-6.26-3.09 6.26-6.91 1 5 4.87-1.18 6.88L12 17.25z"
                  />
                </svg>
              </i>
            </span>
            <h3 className="font-semibold text-xl mb-2 text-center">
              🎁 Reward Yourself
            </h3>
            <ul className="text-gray-700 text-left list-disc pl-5 space-y-1">
              <li>
                Earn <b>watch tokens</b> after completing Pomodoro cycles
              </li>
              <li>Use tokens to unlock "earned" screen time</li>
              <li>Track your progress and balance focus with fun</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
