import type { Level } from "@/features/game/types/level";
import { LEVELS } from "@/features/game/constants/levels";
import type { Difficulty } from "@/features/game/types/difficulty";
import { DIFFICULTIES } from "@/features/game/constants/difficulties";
import Card from "@/shared/ui/Card";
import ProgressBar from "@/shared/ui/ProgressBar";

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

type HeaderItemProps = {
  markerClassName: string;
  label: string;
  value: string;
};

function HeaderItem({ markerClassName, label, value }: HeaderItemProps) {
  return (
    <div className="shrink-0">
      <div className="mb-vh-[7px] flex items-center gap-vw-[8px]">
        <span
          className={`size-vh-[8px] shrink-0 rounded-full ${markerClassName}`}
        />
        <p className="whitespace-nowrap font-nunito-sans text-vh-[14px] font-extrabold leading-none text-[#8A6A12]">
          {label}
        </p>
      </div>
      <p className="whitespace-nowrap font-comfortaa text-vh-[27px] font-bold leading-none text-brown">
        {value}
      </p>
    </div>
  );
}

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
      <div className="flex items-center gap-vw-[24px]">
        <HeaderItem
          markerClassName="bg-yellow"
          label="Сейчас читаем"
          value={LEVEL_LABEL[level]}
        />

        <div className="h-vh-[42px] w-vh-[1px] shrink-0 bg-[#E4CB8A]" />

        <HeaderItem
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
