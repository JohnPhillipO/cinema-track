import { useContext, useState } from "react";
import { TimerContext } from "../../pages/Timer";

export default function SettingsModal() {
  const { setShowSettings, setTimerSettings, timerSettings } =
    useContext(TimerContext);

  // Handle form submission (just close the modal since settings are updated in real-time)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSettings(false);
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between gap-10">
          <label htmlFor="focusTime">Focus Time (minutes)</label>
          <select
            name="focusTime"
            id="focusTime"
            value={timerSettings.focusTime}
            onChange={(e) => {
              setTimerSettings((prev) => ({
                ...prev,
                focusTime: parseInt(e.target.value),
              }));
            }}
          >
            <option value="900">15 Min</option>
            <option value="1500">25 Min</option>
            <option value="3000">50 Min</option>
          </select>
        </div>
        <div className="flex flex-row items-center justify-between gap-10">
          <label htmlFor="breakTime">Break Time (minutes)</label>
          <select
            name="breakTime"
            id="breakTime"
            value={timerSettings.breakTime}
            onChange={(e) => {
              setTimerSettings((prev) => ({
                ...prev,
                breakTime: parseInt(e.target.value),
              }));
            }}
          >
            <option value="300">5 Min</option>
            <option value="600">10 Min</option>
            <option value="900">15 Min</option>
          </select>
        </div>
        <div className="flex flex-row items-center justify-between gap-10">
          <label htmlFor="longBreakTime">Long Break Time (minutes)</label>
          <select
            name="longBreakTime"
            id="longBreakTime"
            value={timerSettings.longBreakTime}
            onChange={(e) => {
              setTimerSettings((prev) => ({
                ...prev,
                longBreakTime: parseInt(e.target.value),
              }));
            }}
          >
            <option value="900">15 Min</option>
            <option value="1800">30 Min</option>
          </select>
        </div>
        <div className="flex flex-row items-center justify-between">
          <label htmlFor="pomodoros">Pomodoros</label>
          <select
            name="pomodoros"
            id="pomodoros"
            value={timerSettings.pomodoros}
            onChange={(e) => {
              setTimerSettings((prev) => ({
                ...prev,
                pomodoros: parseInt(e.target.value),
              }));
            }}
          >
            <option value="2">2 Sets</option>
            <option value="3">3 Sets</option>
            <option value="4">4 Sets</option>
            <option value="5">5 Sets</option>
          </select>
        </div>
        {/* Autoplay */}
        <div className="flex flex-row items-center justify-between">
          <label htmlFor="autoplay">Autoplay</label>
          <input
            type="checkbox"
            name="autoplay"
            id="autoplay"
            checked={timerSettings.autoplay}
            onChange={(e) => {
              setTimerSettings((prev) => ({
                ...prev,
                autoplay: e.target.checked,
              }));
            }}
          />
        </div>
        {/* Sound */}
        <div className="flex flex-row items-center justify-between">
          <label htmlFor="sound">Sound</label>
          <input
            type="checkbox"
            name="sound"
            id="sound"
            checked={timerSettings.sound}
            onChange={(e) => {
              setTimerSettings((prev) => ({
                ...prev,
                sound: e.target.checked,
              }));
            }}
          />
        </div>
        {/* Save and Close Settings */}
        <div className="flex flex-row items-center justify-between mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
            type="submit"
          >
            Save Settings
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
            onClick={() => {
              setShowSettings(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
