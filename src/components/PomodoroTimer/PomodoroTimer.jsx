import Chip from "./Chip";
import { FaPlay, FaFastForward, FaCog, FaPause } from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import usePomodoroTimer from "../../hooks/usePomodoroTimer";
import { useContext } from "react";
import { TimerContext } from "../../pages/Timer";

export default function PomodoroTimer() {
  const { setShowSettings, timerSettings } = useContext(TimerContext);
  const { focusTime, breakTime, longBreakTime, pomodoros, autoplay, sound } =
    timerSettings;
  const {
    time,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    skipTimer,
    status,
    pomodorosCompleted,
  } = usePomodoroTimer(focusTime, breakTime, longBreakTime, pomodoros);

  // Style for buttons
  const statusPlayButtonStyle = {
    active: "bg-red-300 text-red-950",
    break: "bg-green-300 text-green-950",
    longBreak: "bg-blue-300 text-blue-950",
    completed: "bg-yellow-300 text-yellow-950",
  };

  const statusButtonStyle = {
    active: "bg-red-200 text-red-950",
    break: "bg-green-200 text-green-950",
    longBreak: "bg-blue-200 text-blue-950",
    completed: "bg-yellow-200 text-yellow-950",
  };

  const statusTimerStyle = {
    active: "text-red-950",
    break: "text-green-950",
    longBreak: "text-blue-950",
    completed: "text-yellow-950",
  };

  const statusBackgroundStyle = {
    active: "bg-red-100 border-red-950",
    break: "bg-green-100 border-green-950",
    longBreak: "bg-blue-100 border-blue-950",
    completed: "bg-yellow-100 border-yellow-950",
  };

  const textStatus = {
    active: "Focus",
    break: "Short Break",
    longBreak: "Long Break",
    completed: "Completed",
  };

  const completedDotStyle = {
    active: "bg-red-950",
    break: "bg-green-950",
    longBreak: "bg-blue-950",
    completed: "bg-yellow-950",
  };

  const uncompletedDotStyle = {
    active: "bg-red-300",
    break: "bg-green-300",
    longBreak: "bg-blue-300",
    completed: "bg-yellow-300",
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const pomodorosDots = () => {
    const dots = [];
    for (let i = 0; i < pomodoros; i++) {
      if (i < pomodorosCompleted) {
        dots.push(
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${completedDotStyle[status]}`}
          ></div>
        );
      } else {
        dots.push(
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${uncompletedDotStyle[status]}`}
          ></div>
        );
      }
    }
    return dots;
  };

  return (
    <div
      className={`rounded-2xl px-8 py-15 flex flex-col gap-10 ${statusBackgroundStyle[status]} shadow-lg relative w-sm`}
    >
      {/* Open Settings modal button */}
      <button
        className={`absolute top-4 right-4 cursor-pointer text-2xl hover:scale-105 transition-all duration-300 hover:bg-opacity-80 active:scale-95 ${statusTimerStyle[status]}`}
        onClick={() => setShowSettings((prev) => !prev)}
      >
        <FaCog />
      </button>
      {/* Chip to indicate the current status */}
      <Chip status={status}>{textStatus[status]}</Chip>
      {/* Timer */}
      <h1
        className={`text-8xl font-extrabold w-2.5/6 mx-auto ${
          statusTimerStyle[status]
        } ${time === -1 ? "hidden" : ""}`}
      >
        {time === -1 ? "00:00" : formatTime(time)}
      </h1>
      {status === "completed" && (
        <div className="flex flex-col items-center justify-center text-yellow-950">
          <h1 className="text-2xl font-bold w-2.5/6 mx-auto">
            Take a break. You deserve it!
          </h1>
          <p className="max-w-3/4 text-center">
            Click the play button (<FaPlay className="inline-block" />) below to
            start a new session
          </p>
        </div>
      )}
      {/* Buttons to start, pause, and reset the timer */}
      <div className="flex items-center justify-center gap-2">
        <button
          className={`cursor-pointer text-2xl p-4 rounded-2xl ${statusButtonStyle[status]} hover:scale-105 transition-all duration-200 hover:bg-opacity-80 active:scale-95`}
          onClick={resetTimer}
        >
          <MdLoop />
        </button>
        <button
          className={`cursor-pointer text-3xl py-4 px-6 rounded-2xl ${statusPlayButtonStyle[status]} hover:scale-105 transition-all duration-200 hover:bg-opacity-80 active:scale-95`}
          onClick={isRunning ? stopTimer : startTimer}
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className={`cursor-pointer text-2xl p-4 rounded-2xl ${statusButtonStyle[status]} hover:scale-105 transition-all duration-200 hover:bg-opacity-80 active:scale-95`}
          onClick={skipTimer}
        >
          <FaFastForward />
        </button>
      </div>
      {/* Dots to indicate how many pomodoros are left */}
      <div className="flex items-center justify-center gap-2">
        {pomodorosDots()}
      </div>
    </div>
  );
}
