import Card from "@/shared/ui/Card";
import StarFilled from "@/assets/images/stars/star-filled.png";

type ProgressBarSize = "sm" | "md" | "lg";

type ProgressBarProps = {
  value: number;
  max?: number;
  size?: ProgressBarSize;
  className?: string;
  showPercent?: boolean;
  needProgressAnimated?: boolean;
  showStarMarker?: boolean;
};

const getProgressColor = (percent: number) => {
  if (percent >= 100) return "#5FEB78";
  if (percent >= 75) return "#A8F044";
  if (percent >= 50) return "#FFD43B";
  return "#FD9D1A";
};

const sizeClasses: Record<
  ProgressBarSize,
  {
    wrapper: string;
    bar: string;
    marker: string;
    star: string;
    percent: string;
  }
> = {
  sm: {
    wrapper: "px-3 py-2 rounded-full",
    bar: "h-5",
    marker: "size-7",
    star: "size-7",
    percent: "mt-1 text-xs",
  },
  md: {
    wrapper: "px-2 py-1 md:px-3 md:py-2 rounded-full",
    bar: "h-3 md:h-6",
    marker: "size-4 md:size-8",
    star: "size-4 md:size-8",
    percent: "mt-2 text-sm md:text-base",
  },
  lg: {
    wrapper: "px-3 py-2 md:px-4 md:py-3 rounded-full",
    bar: "h-4 md:h-7",
    marker: "size-7 md:size-9",
    star: "size-7 md:size-9",
    percent: "mt-3 text-lg",
  },
};

export default function ProgressBar({
  value,
  max = 100,
  size = "lg",
  className = "",
  showPercent = false,
  needProgressAnimated = true,
  showStarMarker = false,
}: ProgressBarProps) {
  const safeMax = Math.max(max, 1);
  const progress = Math.min(Math.max(value, 0), safeMax);
  const percent = Math.round((progress / safeMax) * 100);

  const fillColor = getProgressColor(percent);
  const classes = sizeClasses[size];

  const markerTranslate =
    percent <= 0
      ? "translate-x-0 -translate-y-1/2"
      : "-translate-x-full -translate-y-1/2";

  return (
    <div className={className}>
      <Card innerClassName={classes.wrapper} size={size}>
        <div
          className={`relative w-full rounded-full bg-vanilla ${classes.bar}`}
        >
          <div
            className="
              relative
              h-full
              overflow-hidden
              rounded-full
              transition-all
              duration-300
              ease-out
            "
            style={{
              width: `${percent}%`,
              backgroundColor: fillColor,
            }}
          >
            {needProgressAnimated && (
              <div className="progress-shine absolute top-0 h-full w-1/2" />
            )}
          </div>

          {showStarMarker && (
            <div
              className={`
                absolute
                top-1/2
                z-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                transition-all
                duration-150
                ${markerTranslate}
                ${classes.marker}
              `}
              style={{
                left: `${percent}%`,
                color: fillColor,
              }}
            >
              <img className={classes.star} src={StarFilled} alt="star" />
            </div>
          )}
        </div>
      </Card>

      {showPercent && (
        <h2 className={`text-center ${classes.percent}`}>{percent} %</h2>
      )}
    </div>
  );
}
