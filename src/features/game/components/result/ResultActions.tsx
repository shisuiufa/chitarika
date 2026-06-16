import Button from "@/shared/ui/Button";

type ResultActionsProps = {
  className?: string;
  onRestart: () => void;
  onOpenSettings: () => void;
};

export default function ResultActions({
  className = "",
  onRestart,
  onOpenSettings,
}: ResultActionsProps) {
  return (
    <div
      className={`border-t-2 border-dashed border-sand/70 pt-6 ${className}`}
    >
      <div className="mx-auto flex flex-col gap-4 w-full md:w-[40%]">
        <Button
          size="lg"
          className="relative z-100 w-full uppercase"
          onClick={onRestart}
        >
          <span className="translate-y-0.5 leading-none">Еще раз</span>
        </Button>

        <div className="relative z-101 flex gap-4 w-full">
          <Button
            onClick={onOpenSettings}
            size="lg"
            variant="secondary"
            className="uppercase flex-1"
          >
            Настройки
          </Button>

          <Button size="lg" variant="secondary" className="uppercase">
            История
          </Button>
        </div>
      </div>
    </div>
  );
}
