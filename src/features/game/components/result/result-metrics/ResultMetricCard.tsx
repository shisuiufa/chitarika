import type { ReactNode } from "react";

type ResultMetricCardColor = "yellow" | "orange" | "green";

type ResultMetricCardProps = {
  icon?: ReactNode;
  label: string;
  value: ReactNode;
  color?: ResultMetricCardColor;
  className?: string;
};

const colorClasses: Record<ResultMetricCardColor, string> = {
  yellow:
    "bg-[#FFF8DD] text-[#8A6800] border-[#F3D35C] shadow-[0_6px_0_#E6C554]",
  orange:
    "bg-[#FFF0DC] text-[#9A5700] border-[#F4B468] shadow-[0_6px_0_#EAA65A]",
  green:
    "bg-[#EAFBED] text-[#008A3D] border-[#7FDE98] shadow-[0_6px_0_#6ED489]",
};

const iconColorClasses: Record<ResultMetricCardColor, string> = {
  yellow: "bg-[#FFE08A]",
  orange: "bg-[#FFD0A0]",
  green: "bg-[#BDF4C8]",
};

export default function ResultMetricCard({
  icon,
  label,
  value,
  color = "yellow",
  className = "",
}: ResultMetricCardProps) {
  return (
    <div
      className={`
        flex min-w-0 items-center gap-4 rounded-4xl border-2 border-b-0 p-4
        min-h-28
        ${colorClasses[color]}
        ${className}
      `}
    >
      <div
        className={`
          flex size-14 shrink-0 items-center justify-center rounded-3xl
          ${iconColorClasses[color]}
        `}
      >
        {icon}
      </div>

      <div className="min-w-0 text-left">
        <h5 className="font-nunito-sans text-base font-bold">{label}</h5>
        <p className="mt-2 font-comfortaa text-2xl lg:text-3xl font-extrabold text-dark-brown">
          {value}
        </p>
      </div>
    </div>
  );
}
