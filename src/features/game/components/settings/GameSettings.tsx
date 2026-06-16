import Button from "@/shared/ui/Button";
import ArrowRightIcon from "@/shared/icons/ArrowRightIcon";
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
    <>
      <h1 className="text-brown font-bold text-5xl mb-2">Читарика</h1>

      <h2 className="font-bold text-2xl mb-10">Настройки чтения</h2>

      <Card className="w-full lg:w-[75%]" innerClassName="p-8">
        <LevelSetting
          className="mb-6"
          selectedLevel={settings.level}
          onSelectLevel={(level) => updateSettings("level", level)}
        />

        <div className="mb-6 flex gap-6">
          <AnswerCountSetting
            className="flex-1"
            selectedCount={settings.answers}
            onSelectCountAnswers={(answer) => updateSettings("answers", answer)}
          />
          <DifficultySetting
            className="flex-1"
            selectedDifficulty={settings.difficulty}
            onSelectDifficulty={(difficulty) =>
              updateSettings("difficulty", difficulty)
            }
          />
        </div>

        <Button className="mx-auto uppercase" size="lg" onClick={onStart}>
          <span className="translate-y-0.5 leading-none">Начать</span>
          <ArrowRightIcon />
        </Button>
      </Card>
    </>
  );
}
