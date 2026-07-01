type TaskCountStepsProps = {
  value: number;
  max: number;
  className?: string;
  onSelect: (value: number) => void;
};

export default function TaskCountSteps({
  value,
  max,
  className = "",
  onSelect,
}: TaskCountStepsProps) {
  return (
    <div
      className={`grid gap-vw-[6px] ${className}`}
      style={{
        gridTemplateColumns: `repeat(${max}, minmax(0, 1fr))`,
      }}
      role="group"
      aria-label="Выбор количества заданий"
    >
      {Array.from({ length: max }, (_, index) => {
        const step = index + 1;
        const isActive = step <= value;

        return (
          <button
            key={step}
            type="button"
            onClick={() => onSelect(step)}
            aria-label={`Выбрать ${step}`}
            aria-pressed={step === value}
            className={`
              h-vh-[10px]
              rounded-full
              transition
              cursor-pointer
              outline-none
              focus-visible:ring-2
              focus-visible:ring-brown/40
              focus-visible:ring-offset-2
              focus-visible:ring-offset-cream
              ${isActive ? "bg-yellow shadow-[0_2px_0_#FD9D1A]" : "bg-sand/55"}
            `}
          />
        );
      })}
    </div>
  );
}
