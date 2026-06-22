import type { Level } from "@/features/game/types/level";
import { LEVELS } from "@/features/game/constants/levels";
import type { Difficulty } from "@/features/game/types/difficulty";
import { DIFFICULTIES } from "@/features/game/constants/difficulties";
import Card from "@/shared/ui/Card";
import ProgressBar from "@/shared/ui/ProgressBar";
import TaskHeaderItem from "@/features/game/components/play/TaskHeaderItem";

type GameHeaderProps = {
  level: Level;
  difficulty: Difficulty;
  current: number;
  total: number;
};

const LEVEL_LABEL: Record<Level, string> = {
  [LEVELS.Syllables]: "Слоги",
  [LEVELS.Words]: "Слова",
  [LEVELS.Sentences]: "Предложения",
  [LEVELS.Texts]: "Тексты",
};

const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  [DIFFICULTIES.Easy]: "Легко",
  [DIFFICULTIES.Medium]: "Средне",
  [DIFFICULTIES.Hard]: "Сложно",
};

export default function TaskHeader({
  level,
  difficulty,
  current = 1,
  total,
}: GameHeaderProps) {
  return (
    <Card
      size="sm"
      className="w-full"
      innerClassName="bg-[#FFF8DD] px-vw-[22px] py-vh-[14px]"
    >
      <div className="flex items-center gap-vw-[24px] h-full">
        <TaskHeaderItem
          markerClassName="bg-yellow"
          label="Сейчас читаем"
          value={LEVEL_LABEL[level]}
        />

        <div className="h-vh-[42px] w-vh-[1px] shrink-0 bg-[#E4CB8A]" />

        <TaskHeaderItem
          markerClassName="bg-orange"
          label="Сложность"
          value={DIFFICULTY_LABEL[difficulty]}
        />

        <div className="h-vh-[42px] w-vh-[1px] shrink-0 bg-[#E4CB8A]" />

        <div className="min-w-0 flex-1">
          <div className="mb-vh-[7px] flex items-center justify-between gap-vw-[14px]">
            <div className="flex min-w-0 items-center gap-vw-[8px]">
              <span className="size-vh-[8px] shrink-0 rounded-full bg-[#5FEB78]" />
              <p className="truncate font-nunito-sans text-vh-[14px] font-extrabold leading-none text-[#8A6A12]">
                Прогресс
              </p>
            </div>
            <p className="shrink-0 font-nunito-sans text-vh-[14px] font-bold leading-none text-brown">
              {current}/{total}
            </p>
          </div>

          <ProgressBar
            value={current}
            max={total}
            size="sm"
            needProgressAnimated={false}
            showStarMarker={true}
          />
        </div>
      </div>
    </Card>
  );
}
