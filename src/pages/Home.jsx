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
        <p className="text-gray-950 mt-4 max-w-2xl font-inter text-lg">
          Work smart. Watch guilt-free. Track your progress and enjoy screen
          time - when you’ve earned it.
        </p>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-3xl mt-15 cursor-pointer font-inter text-lg hover:bg-blue-600 transition-all duration-200"
          onClick={() => navigate("/timer")}
        >
          Get Started
        </button>
      </section>
      {/* Features */}
    </>
  );
}
