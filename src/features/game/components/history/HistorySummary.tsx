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
      innerClassName="px-5 py-4 bg-cream flex justify-between items-center"
    >
      <div>
        <span className="font-nunito-sans text-sm font-extrabold text-[#7B6C4E]">
          Всего в истории
        </span>

        <strong className="block font-comfortaa text-2xl font-extrabold text-dark-brown">
          {count} {getTaskCountLabel(count)}
        </strong>
      </div>

      <div
        className="
          flex size-14 shrink-0 items-center justify-center rounded-3xl
          bg-[#BDF4C8] text-[#008A3D] shadow-[0_4px_0_#6ED489]
        "
      >
        <ReadIcon className="size-8" />
      </div>
    </Card>
  );
}
