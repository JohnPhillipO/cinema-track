import { useState, useEffect, useRef } from "react";

export default function usePomodoroTimer(
  focusTime = 25 * 60,
  breakTime = 5 * 60,
  longBreakTime = 15 * 60,
  pomodoros = 4
) {
  const [time, setTime] = useState(focusTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const [status, setStatus] = useState("active");
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
  const hasProcessedCompletion = useRef(false);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (status === "active") {
              if ((pomodorosCompleted + 1) % pomodoros === 0) {
                setStatus("longBreak");
                return longBreakTime;
              } else {
                setStatus("break");
                hasProcessedCompletion.current = false;
                return breakTime;
              }
            } else if (status === "break" && !hasProcessedCompletion.current) {
              hasProcessedCompletion.current = true;
              // Add 1 to pomodorosCompleted
              setPomodorosCompleted((prev) => {
                const newValue = prev + 1;
                console.log(newValue);
                return newValue;
              });
              setStatus("active");
            } else if (status === "longBreak") {
              setStatus("active");
              setPomodorosCompleted(0);
              hasProcessedCompletion.current = false;
              return focusTime;
            }
            return pomodorosCompleted % pomodoros === 0
              ? focusTime
              : longBreakTime;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, status]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(focusTime);
    setStatus("active");
    setIsRunning(false);
    setPomodorosCompleted(0);
    hasProcessedCompletion.current = false;
    clearInterval(intervalRef.current);
  };

  return {
    time,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    status,
    pomodorosCompleted,
  };
}
