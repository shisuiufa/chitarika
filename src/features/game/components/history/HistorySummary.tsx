import ReadIcon from "@/shared/icons/ReadIcon";
import { getTaskCountLabel } from "@/features/game/model/reading/get-task-count-label";
import Card from "@/shared/ui/Card";

type GameHistorySummaryProps = {
  className?: string;
  count: number;
};

export default function HistorySummary({
  className = "",
  count,
}: GameHistorySummaryProps) {
  return (
    <Card
      className={className}
      innerClassName="p-vh-[30px] bg-cream flex justify-between items-center"
    >
      <div>
        <span className="font-nunito-sans text-vh-[18px] font-extrabold text-brown">
          Всего в истории
        </span>

        <strong className="block font-nunito-sans text-vh-[20px] font-extrabold text-dark-brown mt-vh-[8px] leading-none">
          {count} {getTaskCountLabel(count)}
        </strong>
      </div>

      <div
        className="
          flex size-vh-[60px] shrink-0 items-center justify-center rounded-full
          bg-[#BDF4C8] text-[#008A3D]
        "
      >
        <ReadIcon className="size-vh-[30px]"/>
      </div>
    </Card>
  );
}
