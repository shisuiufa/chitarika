import Card from "@/shared/ui/Card";
import type { ReactNode } from "react";

type ResultMetricCardColor = "yellow" | "orange" | "green";

type ResultMetricCardProps = {
  icon?: ReactNode;
  label: string;
  value: ReactNode;
  color?: ResultMetricCardColor;
  className?: string;
};

const iconColorClasses: Record<ResultMetricCardColor, string> = {
  yellow: "bg-[#FFF2C9] text-[#8A6800]",
  orange: "bg-[#FFE8CC] text-[#9A5700]",
  green: "bg-[#DDF8E5] text-[#008A3D]",
};

export default function ResultMetricCard({
  icon,
  label,
  value,
  color = "yellow",
  className = "",
}: ResultMetricCardProps) {
  return (
    <Card className={className} innerClassName="bg-cream p-7 lg:p-12">
      <div className="flex flex-col items-center gap-2 lg:gap-4">
        <div className={`rounded-full p-4 lg:p-6 ${iconColorClasses[color]}`}>
          {icon}
        </div>

        <span className="font-nunito-sans text-lg lg:text-xl text-brown">
          {label}
        </span>

        <strong className="font-comfortaa text-lg lg:text-xl font-extrabold">
          {value}
        </strong>
      </div>
    </Card>
  );
}
