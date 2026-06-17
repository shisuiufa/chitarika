import Card from "@/shared/ui/Card";
import CircleButton from "@/shared/ui/CircleButton";

type AnswerCountSelectorProps = {
  selectedCount: number;
  onSelectCountAnswers: (answerCount: number) => void;
};

const MIN_ANSWERS = 1;
const MAX_ANSWERS = 10;

export default function AnswerCountSelector({
  selectedCount,
  onSelectCountAnswers,
}: AnswerCountSelectorProps) {
  const handleDecrease = () => {
    if (selectedCount <= MIN_ANSWERS) return;

    onSelectCountAnswers(selectedCount - 1);
  };

  const handleIncrease = () => {
    if (selectedCount >= MAX_ANSWERS) return;

    onSelectCountAnswers(selectedCount + 1);
  };

  return (
    <Card
      className="w-full rounded-full"
      innerClassName="p-3 sm:p-3 md:p-5  rounded-full flex gap-3 sm:gap-5 justify-between items-center bg-cream"
    >
      <CircleButton
        onClick={handleDecrease}
        disabled={selectedCount <= MIN_ANSWERS}
      >
        -
      </CircleButton>

      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl">
        {selectedCount}
      </h1>

      <CircleButton
        onClick={handleIncrease}
        disabled={selectedCount >= MAX_ANSWERS}
      >
        +
      </CircleButton>
    </Card>
  );
}
