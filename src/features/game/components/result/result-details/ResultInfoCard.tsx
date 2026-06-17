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
      innerClassName="flex items-center gap-3 bg-cream px-4 py-2 md:py-3"
    >
      <div
        className="
          flex size-8 xl:size-11 shrink-0 items-center justify-center rounded-2xl
          bg-yellow text-brown shadow-[0_3px_0_#FD9D1A]
        "
      >
        {icon}
      </div>

      <div>
        <p className="font-nunito-sans text-base xl:text-lg  text-brown">
          {label}
        </p>
        <p className="font-comfortaa text-base xl:text-lg font-extrabold text-dark-brown">
          {value}
        </p>
      </div>
    </Card>
  );
}
