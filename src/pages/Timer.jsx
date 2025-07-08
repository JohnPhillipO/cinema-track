import PomodoroTimer from "../components/PomodoroTimer/PomodoroTimer";
import { createContext, useState } from "react";
import SettingsModal from "../components/PomodoroTimer/SettingsModal";

export default function Timer() {
  const [showSettings, setShowSettings] = useState(false);
  // Default timer settings
  const [timerSettings, setTimerSettings] = useState({
    focusTime: 1500,
    breakTime: 300,
    longBreakTime: 900,
    pomodoros: 4,
    autoplay: true,
    sound: true,
  });

  return (
    <TimerContext.Provider
      value={{ showSettings, timerSettings, setShowSettings, setTimerSettings }}
    >
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
        <h1 className="text-4xl font-bold pb-10">Pomodoro Timer</h1>
        <PomodoroTimer />
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
      </section>
    </TimerContext.Provider>
  );
}

export const TimerContext = createContext();
