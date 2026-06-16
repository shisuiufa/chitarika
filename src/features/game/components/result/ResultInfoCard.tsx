import type { ReactNode } from "react";

type ResultInfoCardProps = {
  className?: string;
  icon: ReactNode;
  label: string;
  value: string;
};

export default function ResultInfoCard({
  className = "",
  icon,
  label,
  value,
}: ResultInfoCardProps) {
  return (
    <div
      className={`flex min-w-0 items-center gap-3 rounded-3xl border-2 border-sand
        bg-cream px-4 py-3 text-left shadow-[0_5px_0_#E0D0B2] ${className}`}
    >
      <div
        className="
          flex size-11 shrink-0 items-center justify-center rounded-2xl
          bg-yellow text-brown shadow-[0_3px_0_#FD9D1A]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <span className="font-nunito-sans text-sm font-extrabold text-[#7B6C4E]">
          {label}
        </span>
        <strong className="block truncate font-comfortaa text-xl font-extrabold text-dark-brown">
          {value}
        </strong>
      </div>
    </div>
  );
}
