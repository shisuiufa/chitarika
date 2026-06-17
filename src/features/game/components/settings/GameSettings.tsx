import Button from "@/shared/ui/Button";
import { Play } from "lucide-react";
import Card from "@/shared/ui/Card";
import LevelSetting from "@/features/game/components/settings/level-setting/LevelSetting";
import type { GameSettingsState } from "@/features/game/types/setting";
import TaskCountSetting from "@/features/game/components/settings/task-count-setting/TaskCountSetting";
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
    <Card
      className="w-full h-full"
      innerClassName="p-vh-[40px] flex flex-col"
    >
      <div className="grow flex flex-col gap-vh-[30px] pb-vh-[35px]">
        <div className="text-center leading-none font-bold">
          <h1 className="text-vh-[50px] mb-vh-[10px]">
            Читарика
          </h1>
          <h2 className="text-vh-[25px]">
            Настройки чтения
          </h2>
        </div>

        <LevelSetting
          className="flex-1"
          selectedLevel={settings.level}
          onSelectLevel={(level) => updateSettings("level", level)}
        />

        <div className="flex flex-col md:flex-row gap-4 sm:gap-vh-[30px]">
          <TaskCountSetting
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

      <div className="border-t-vh-[5px] border-dashed border-sand/70 pt-vh-[35px]">
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
  );
}
