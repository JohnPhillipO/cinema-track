export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen text-center font-inter bg-gray-50">
        <h1 className="text-7xl font-bold font-inter">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-300">
            Earn your screen time.
          </span>
        </h1>
        <p className="text-gray-950 mt-4 max-w-2xl font-inter text-lg">
          Work smart. Watch guilt-free. Track your progress and enjoy screen
          time - when you’ve earned it.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-3xl mt-15 cursor-pointer font-inter text-lg hover:bg-blue-600 transition-all duration-200">
          Get Started
        </button>
      </section>
    </>
  );
}
