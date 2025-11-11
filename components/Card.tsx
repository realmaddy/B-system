import { ArrowUpRight } from "lucide-react";

interface CardProps {
  title: string;
  value: string;
  percent: string;
  icon: React.ReactNode;
}

export default function Card({ title, value, percent, icon }: CardProps) {
  return (
    <div className="flex flex-col justify-between bg-white border border-gray-100 rounded-xl shadow-sm p-5 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div className="text-gray-500">{icon}</div>
        <span className="text-xs text-green-500 flex items-center gap-1">
          {percent}
          <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}
