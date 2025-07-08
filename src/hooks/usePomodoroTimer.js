import { useState, useEffect, useRef } from "react";
import { useSound } from "use-sound";
import notificationSound from "../assets/notification.mp3";

export default function usePomodoroTimer(
  focusTime = 25 * 60,
  breakTime = 5 * 60,
  longBreakTime = 15 * 60,
  pomodoros = 4,
  autoplay = false,
  sound = true
) {
  const [time, setTime] = useState(focusTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const [status, setStatus] = useState("active");
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
  const hasProcessedCompletion = useRef(false);
  const [playNotification] = useSound(notificationSound);

  const prevSettings = useRef({
    focusTime,
    breakTime,
    longBreakTime,
    pomodoros,
  });

  // Reset timer when settings change
  useEffect(() => {
    if (
      prevSettings.current.focusTime !== focusTime ||
      prevSettings.current.breakTime !== breakTime ||
      prevSettings.current.longBreakTime !== longBreakTime ||
      prevSettings.current.pomodoros !== pomodoros ||
      prevSettings.current.autoplay !== autoplay ||
      prevSettings.current.sound !== sound
    ) {
      setTime(focusTime);
      setStatus("active");
      setPomodorosCompleted(0);
      setIsRunning(false);
      hasProcessedCompletion.current = false;
    }
    prevSettings.current = {
      focusTime,
      breakTime,
      longBreakTime,
      pomodoros,
      autoplay,
      sound,
    };
  }, [
    focusTime,
    breakTime,
    longBreakTime,
    pomodoros,
    isRunning,
    autoplay,
    sound,
  ]);

  useEffect(() => {
    if (isRunning && status !== "completed") {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          // When the timer reaches 0, do the following:
          if (prev <= 0) {
            clearInterval(intervalRef.current);
            if (!autoplay) {
              // If autoplay is true, keep the timer running
              setIsRunning(false);
            }
            if (sound) {
              playNotification(); // Play notification sound
            }
            // if the status is active, do the following:
            // Check if the next pomodoro set is due
            // If it is, set the status to longBreak
            // If it is not, set the status to break
            if (status === "active") {
              // Check if the next pomodoro set is due
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
              setPomodorosCompleted((prev) => prev + 1);
              setStatus("active");
            } else if (status === "longBreak") {
              hasProcessedCompletion.current = false;
              setStatus("completed");
              setPomodorosCompleted((prev) => prev + 1);
              return -1;
            }
            // If the pomodorosCompleted is a modular of pomodoros, set the time to focusTime
            // Otherwise, set the time to longBreakTime
            return pomodorosCompleted % pomodoros === 0
              ? focusTime
              : longBreakTime;
          }
          return prev - 1;
        });
      }, 1000);
    }
    if (status === "completed") {
      setIsRunning(false);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, status]);

  const startTimer = () => {
    if (status === "completed") {
      setStatus("active");
      setPomodorosCompleted(0);
      setTime(focusTime);
    }
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

  const skipTimer = () => {
    if (status !== "completed") {
      clearInterval(intervalRef.current);
      hasProcessedCompletion.current = false;
      setIsRunning(false);
      if (status === "active") {
        if (pomodorosCompleted === pomodoros - 1) {
          setStatus("longBreak");
          setTime(longBreakTime);
        } else {
          setTime(breakTime);
          setStatus("break");
        }
      } else if (status === "break") {
        setTime(focusTime);
        setStatus("active");
        setPomodorosCompleted((prev) => {
          const newValue = prev + 1;
          return newValue;
        });
      } else if (status === "longBreak") {
        setStatus("completed");
        setPomodorosCompleted((prev) => {
          const newValue = prev + 1;
          return newValue;
        });
        setTime(-1);
      }
    }
  };

  return {
    time,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    skipTimer,
    status,
    pomodorosCompleted,
  };
}
