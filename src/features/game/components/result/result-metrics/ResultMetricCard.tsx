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
  className,
}: ResultMetricCardProps) {
  return (
    <Card
      variant={variant}
      innerClassName="p-vh-[20px] flex items-center gap-vw-[20px]"
      className={className}
    >
      <div
        className={`
          flex size-vh-[60px] shrink-0 items-center justify-center rounded-full [&>svg]:size-vh-[35px]
          ${iconColorClasses[variant]}
        `}
      >
        {icon}
      </div>

      <div className="min-w-0 text-left">
        <h5 className="font-nunito-sans text-base font-bold leading-none">
          {label}
        </h5>
        <p className="mt-vh-[15px] font-comfortaa text-vh-[30px] font-extrabold text-dark-brown leading-none">
          {value}
        </p>
      </div>
    </Card>
  );
}
