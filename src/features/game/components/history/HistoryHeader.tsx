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
    <div
      className={`w-full flex flex-wrap justify-between items-center gap-vw-[30px] ${className}`}
    >
      <div className="text-left">
        <h1 className="text-vh-[40px] font-extrabold text-brown leading-none">
          История игры
        </h1>
        <p className="mt-vh-[10px] text-vh-[20px] font-nunito-sans font-bold text-[#7B6C4E]">
          Все задания из этой попытки в порядке прохождения.
        </p>
      </div>
      <ResultDetails level={level} difficulty={difficulty} />
    </div>
  );
}
