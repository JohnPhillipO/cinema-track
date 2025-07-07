import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import reward from "../assets/medal-front-color.png";
import watchlist from "../assets/camera-front-color.png";
import timer from "../assets/clock-front-color.png";

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
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-3xl mt-10 cursor-pointer font-inter text-lg hover:bg-blue-600 transition-all duration-200"
          onClick={() => navigate("timer")}
        >
          Get Started
        </button>
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
            <img
              src={timer}
              alt="3D Picture of an alarm clock"
              className="w-12 h-12 mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-center">
              Stay Focused with the Built-in Pomodoro Timer
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
            <img
              src={watchlist}
              alt="picture of 3d camera from the front"
              className="w-12 h-12 mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-center">
              Build and Manage Your Watchlist
            </h3>
            <ul className="text-gray-700 text-left list-disc pl-5 space-y-1">
              <li>Search for movies and shows</li>
              <li>Add them to your to-watch list with a single click</li>
              <li>Use tokens to unlock movies in your watchlist</li>
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
            <img
              src={reward}
              alt="3D Picture of a medal"
              className="w-12 h-12 mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-center">
              Reward Yourself
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
