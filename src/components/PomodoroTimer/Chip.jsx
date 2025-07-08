import { PiBrain, PiCoffeeDuotone } from "react-icons/pi";

export default function Chip({ status, children }) {
  const statusColor = {
    active: "bg-red-200 text-red-950 border-red-950",
    break: "bg-green-100 text-green-900 border-green-950",
    longBreak: "bg-blue-200 text-blue-950 border-blue-950",
  };

  const statusIcon = {
    active: <PiBrain className="text-xl font-bold" />,
    break: <PiCoffeeDuotone className="text-xl font-bold" />,
    longBreak: <PiCoffeeDuotone className="text-xl font-bold" />,
  };

  return (
    <div
      className={`flex items-center justify-center gap-2 py-1 px-4 rounded-4xl ${statusColor[status]} border-1 w-fit mx-auto`}
    >
      {statusIcon[status]}
      <p className="text-sm font-medium">{children}</p>
    </div>
  );
}
