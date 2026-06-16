import starFilled from "@/assets/images/stars/star-filled.png";
import starEmpty from "@/assets/images/stars/star-empty.png";

type GameProgressStarsProps = {
  value: number;
  max: number;
  className?: string;
};

export default function GameProgressStar({
  value,
  max = 5,
  className,
}: GameProgressStarsProps) {
  const safeValue = Math.min(Math.max(value, 0), max);

  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: max }).map((_, index) => {
        const isFilled = index < safeValue;

        return (
          <img
            key={index}
            src={isFilled ? starFilled : starEmpty}
            alt="star"
            className="h-10 w-10 select-none"
            draggable={false}
          />
        );
      })}
    </div>
  );
}
