type TaskCountStepsProps = {
  value: number;
  max: number;
  className?: string;
};

export default function TaskCountSteps({
  value,
  max,
  className = "",
}: TaskCountStepsProps) {
  return (
    <div
      className={`grid gap-vw-[6px] ${className}`}
      style={{
        gridTemplateColumns: `repeat(${max}, minmax(0, 1fr))`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: max }, (_, index) => {
        const step = index + 1;
        const isActive = step <= value;

        return (
          <span
            key={step}
            className={`
              h-vh-[10px]
              rounded-full
              transition
              ${isActive ? "bg-yellow shadow-[0_2px_0_#FD9D1A]" : "bg-sand/55"}
            `}
          />
        );
      })}
    </div>
  );
}
