import Card from "@/shared/ui/Card";
import AnswerCountSelector from "@/features/game/components/settings/answer-count-setting/AnswerCountSelector";

type AnswerCountSettingProps = {
  className?: string;
  selectedCount: number;
  onSelectCountAnswers: (answerCount: number) => void;
};

export default function AnswerCountSetting({
  className,
  selectedCount,
  onSelectCountAnswers,
}: AnswerCountSettingProps) {
  return (
    <Card className={`${className}`} innerClassName="p-6 bg-vanilla">
      <h1 className="text-2xl">Количество ответов</h1>

      <p className="font-nunito-sans font-medium text-lg mb-6">
        Сколько вариантов показывать
      </p>

      <AnswerCountSelector
        selectedCount={selectedCount}
        onSelectCountAnswers={onSelectCountAnswers}
      />
    </Card>
  );
}
