import ResultDetails from "@/features/game/components/result/result-details/ResultDetails";
import type { Difficulty } from "@/features/game/types/difficulty";
import type { Level } from "@/features/game/types/level";

type GameHistoryHeaderProps = {
  className?: string;
  level: Level;
  difficulty: Difficulty;
};

export default function HistoryHeader({
  className = "",
  level,
  difficulty,
}: GameHistoryHeaderProps) {
  return (
    <div className={`w-full flex flex-wrap justify-between gap-6 ${className}`}>
      <div className="text-left">
        <h1 className="mt-1 text-3xl xl:text-4xl font-extrabold text-brown">
          История игры
        </h1>
        <p className="mt-2 font-nunito-sans text-lg font-bold text-[#7B6C4E]">
          Все задания из этой попытки в порядке прохождения.
        </p>
      </div>
      <ResultDetails className="flex-1" level={level} difficulty={difficulty} />
    </div>
  );
}
