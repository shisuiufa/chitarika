import type { ReactNode } from "react";
import Card from "@/shared/ui/Card";

type ResultMetricCardColor = "yellow" | "orange" | "green" | "default";

type ResultMetricCardProps = {
  icon?: ReactNode;
  label: string;
  value: ReactNode;
  variant?: ResultMetricCardColor;
  className?: string;
};

const iconColorClasses: Record<ResultMetricCardColor, string> = {
  yellow: "bg-[#FFE08A]",
  orange: "bg-[#FFD0A0]",
  green: "bg-[#BDF4C8]",
  default: "bg-sand",
};

export default function ResultMetricCard({
  icon,
  label,
  value,
  variant = "default",
  className = "",
}: ResultMetricCardProps) {
  return (
    <Card
      variant={variant}
      innerClassName="p-4 flex items-center gap-4"
      className={className}
    >
      <div
        className={`
          flex size-12 md:size-14 shrink-0 items-center justify-center rounded-full
          ${iconColorClasses[variant]}
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
    </Card>
  );
}
