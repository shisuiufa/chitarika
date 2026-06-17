import type { ReactNode } from "react";
import Card from "@/shared/ui/Card";

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
    <Card
      size="lg"
      className={className}
      innerClassName="flex items-center gap-vw-[20px] bg-cream px-vh-[30px] py-vh-[20px]"
    >
      <div
        className="
          flex size-vh-[60px] shrink-0 items-center justify-center rounded-full
          bg-yellow text-brown [&>svg]:size-vh-[35px]
        "
      >
        {icon}
      </div>

      <div>
        <p className="font-nunito-sans text-base text-vh-[20px] font-bold text-brown">
          {label}
        </p>
        <p className="font-comfortaa text-base text-vh-[18px] font-bold text-dark-brown">
          {value}
        </p>
      </div>
    </Card>
  );
}
