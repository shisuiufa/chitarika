import { useEffect, useReducer, useState } from "react";
import GameSettings from "@/features/game/components/settings/GameSettings";
import GamePlay from "@/features/game/components/play/GamePlay";
import GameResult from "@/features/game/components/result/GameResult";
import GameHistory from "@/features/game/components/history/GameHistory";
import { SCREENS } from "./features/game/constants/screens";
import AppLoader from "@/shared/ui/AppLoader";
import GameLoading from "@/features/game/components/loading/GameLoading";
import {
  gameReducer,
  initialGameState,
} from "@/features/game/model/game-reducer";
import { GAME_ACTIONS } from "@/features/game/constants/game-actions";
import type { GameSettingsState } from "@/features/game/types/setting";
import type { ReadingTask } from "@/features/game/types/reading";
import FlyingBackground from "@/shared/ui/FlyingBackground";

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);

  useEffect(() => {
    let timeoutId: number | null = null;
    let ignore = false;

    const delay = (ms: number) => {
      return new Promise<void>((resolve) => {
        timeoutId = window.setTimeout(resolve, ms);
      });
    };

    const prepareApp = async () => {
      await Promise.allSettled([
        document.fonts.load('400 24px "Comfortaa"'),
        document.fonts.load('700 48px "Comfortaa"'),
        document.fonts.load('400 48px "Nunito Sans"'),
        document.fonts.load('700 48px "Nunito Sans"'),
        delay(1000),
      ]);

      if (!ignore) {
        setIsAppLoading(false);
      }
    };

    void prepareApp();

    return () => {
      ignore = true;

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleStartGame = () => {
    dispatch({
      type: GAME_ACTIONS.GameStarted,
    });
  };

  const handleLoadingComplete = (tasks: ReadingTask[]) => {
    dispatch({
      type: GAME_ACTIONS.LoadingCompleted,
      payload: {
        tasks,
        startedAt: performance.now(),
      },
    });
  };

  const handleChangeSettings = (settings: GameSettingsState) => {
    dispatch({
      type: GAME_ACTIONS.SettingsChanged,
      payload: settings,
    });
  };

  const handleNextTask = () => {
    dispatch({
      type: GAME_ACTIONS.NextTask,
    });
  };

  const handleGameComplete = () => {
    dispatch({
      type: GAME_ACTIONS.GameCompleted,
      payload: {
        completedAt: performance.now(),
      },
    });
  };

  const handleOpenSettings = () => {
    dispatch({
      type: GAME_ACTIONS.SettingsOpened,
    });
  };

  const handleOpenResult = () => {
    dispatch({
      type: GAME_ACTIONS.ResultOpened,
    });
  };

  const handleOpenHistory = () => {
    dispatch({
      type: GAME_ACTIONS.HistoryOpened,
    });
  };

  if (isAppLoading) {
    return <AppLoader />;
  }

  return (
    <div className="relative w-full h-dvh">
      <FlyingBackground />

      <div
        className="
          relative z-10 w-full h-full scroll overflow-y-auto
          py-vh-[40px]
          px-vw-[40px]
          flex items-center justify-center
        "
      >
        <div className="w-full h-full lg:max-w-[75%]">
          {gameState.screen === SCREENS.Settings && (
            <GameSettings
              settings={gameState.settings}
              onStart={handleStartGame}
              onChangeSettings={handleChangeSettings}
            />
          )}

          {gameState.screen === SCREENS.Game && (
            <GamePlay
              settings={gameState.settings}
              tasks={gameState.tasks}
              currentTaskIndex={gameState.currentTaskIndex}
              onNextTask={handleNextTask}
              onComplete={handleGameComplete}
            />
          )}

          {gameState.screen === SCREENS.Result && (
            <GameResult
              startedAt={gameState.startedAt ?? 0}
              completedAt={gameState.completedAt ?? 0}
              tasks={gameState.tasks}
              level={gameState.settings.level}
              difficulty={gameState.settings.difficulty}
              onOpenSettings={handleOpenSettings}
              onOpenHistory={handleOpenHistory}
              onRestart={handleStartGame}
            />
          )}

          {gameState.screen === SCREENS.History && (
            <GameHistory
              tasks={gameState.tasks}
              level={gameState.settings.level}
              difficulty={gameState.settings.difficulty}
              onBackToResult={handleOpenResult}
              onRestart={handleStartGame}
            />
          )}

          {gameState.screen === SCREENS.Loading && (
            <GameLoading
              settings={gameState.settings}
              onComplete={handleLoadingComplete}
              onOpenSettings={handleOpenSettings}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
