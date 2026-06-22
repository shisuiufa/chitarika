import Card from "@/shared/ui/Card";
import StarFilled from "@/assets/images/stars/star-filled.png";
import { cn } from "@/shared/lib/cn";

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

type ProgressBarSizeClasses = {
  wrapper: string;
  bar: string;
  marker: string;
  star: string;
  percent: string;
};

const getProgressColor = (percent: number): string => {
  if (percent >= 100) return "#5FEB78";
  if (percent >= 75) return "#A8F044";
  if (percent >= 50) return "#FFD43B";
  return "#FD9D1A";
};

const sizeClasses: Record<ProgressBarSize, ProgressBarSizeClasses> = {
  sm: {
    wrapper: "px-vw-[10px] py-vh-[7px] rounded-full",
    bar: "h-vh-[13px]",
    marker: "size-vh-[23px]",
    star: "size-vh-[23px]",
    percent: "mt-vh-[4px] text-vh-[12px]",
  },
  md: {
    wrapper: "px-vw-[12px] py-vh-[8px] rounded-full",
    bar: "h-vh-[24px]",
    marker: "size-vh-[32px]",
    star: "size-vh-[32px]",
    percent: "mt-vh-[8px] text-vh-[16px]",
  },
  lg: {
    wrapper: "px-vw-[16px] py-vh-[12px] rounded-full",
    bar: "h-vh-[28px]",
    marker: "size-vh-[36px]",
    star: "size-vh-[36px]",
    percent: "mt-vh-[12px] text-vh-[18px]",
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

  return (
    <div className={cn("w-full", className)}>
      <Card
        innerClassName={cn("flex items-center", classes.wrapper)}
        size={size}
      >
        <div
          className={cn("relative w-full rounded-full bg-vanilla", classes.bar)}
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              transition-[width]
              duration-300
              ease-out
            "
            style={{
              width: `${percent}%`,
            }}
          >
            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-full
                transition-[background-color]
                duration-300
                ease-out
              "
              style={{
                backgroundColor: fillColor,
              }}
            >
              {needProgressAnimated && (
                <div className="progress-shine absolute top-0 h-full w-1/2" />
              )}
            </div>

            {showStarMarker && percent > 0 && (
              <div
                className={cn(
                  "absolute right-0 top-1/2 z-10 flex -translate-y-1/2 translate-x-1/2",
                  "items-center justify-center rounded-full bg-white transition-[color]",
                  "duration-300 ease-out",
                  classes.marker,
                )}
                style={{
                  color: fillColor,
                }}
              >
                <img
                  className={classes.star}
                  src={StarFilled}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </div>
      </Card>

      {showPercent && (
        <div className={cn("text-center font-extrabold", classes.percent)}>
          {percent} %
        </div>
      )}
    </div>
  );
}
