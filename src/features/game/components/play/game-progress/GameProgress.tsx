import ProgressBar from "@/shared/ui/ProgressBar";
import GameProgressStar from "@/features/game/components/play/game-progress/GameProgressStar";

type GameProgressProps = {
  current: number;
  total: number;
  className?: string;
};

export default function GameProgress({
  current,
  total,
  className = "",
}: GameProgressProps) {
  const shouldShowStars = total <= 5;

  return (
    <div className={className}>
      {shouldShowStars ? (
        <GameProgressStar
          className="mx-auto w-fit"
          value={current}
          max={total}
        />
      ) : (
        <ProgressBar
          className="w-full"
          value={current}
          max={total}
          size="md"
          needProgressAnimated={false}
          showStarMarker={true}
        />
      )}
    </div>
  );
}
