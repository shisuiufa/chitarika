import Button from "@/shared/ui/Button";
import { Play } from "lucide-react";
import Card from "@/shared/ui/Card";
import LevelSetting from "@/features/game/components/settings/level-setting/LevelSetting";
import type { GameSettingsState } from "@/features/game/types/setting";
import AnswerCountSetting from "@/features/game/components/settings/answer-count-setting/AnswerCountSetting";
import DifficultySetting from "@/features/game/components/settings/difficulty-setting/DifficultySetting";

type GameSettingsProps = {
  settings: GameSettingsState;
  onStart: () => void;
  onChangeSettings: (settings: GameSettingsState) => void;
};

export default function GameSettings({
  settings,
  onStart,
  onChangeSettings,
}: GameSettingsProps) {
  const updateSettings = <K extends keyof GameSettingsState>(
    key: K,
    value: GameSettingsState[K],
  ) => {
    onChangeSettings({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="w-full grow flex flex-col gap-5 items-center">
      <div className="text-center">
        <h1 className="text-brown font-bold text-2xl lg:text-[4vh] leading-none mb-[1.5vh]">
          Читарика
        </h1>

        <h2 className="font-bold text-xl lg:text-[2vh] leading-none">
          Настройки чтения
        </h2>
      </div>

      <Card
        className="grow w-full lg:w-[90%] xl:w-[70%]"
        innerClassName="p-4 sm:p-6 flex flex-col gap-5 justify-between"
      >
        <div className="grow flex flex-col gap-5 justify-between">
          <LevelSetting
            selectedLevel={settings.level}
            onSelectLevel={(level) => updateSettings("level", level)}
          />

          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <AnswerCountSetting
              className="flex-1"
              selectedCount={settings.answers}
              onSelectCountAnswers={(answer) =>
                updateSettings("answers", answer)
              }
            />
            <DifficultySetting
              className="flex-1"
              selectedDifficulty={settings.difficulty}
              onSelectDifficulty={(difficulty) =>
                updateSettings("difficulty", difficulty)
              }
            />
          </div>
        </div>

        <div className="border-t-2 border-dashed border-sand/70 pt-4 md:pt-6">
          <Button
            className="mx-auto uppercase"
            size="lg"
            onClick={onStart}
            icon={<Play aria-hidden="true" />}
          >
            <span className="translate-y-0.5 leading-none">Начать</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
