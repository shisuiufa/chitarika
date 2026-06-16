import { useEffect, useReducer, useState } from "react";
import GameSettings from "@/features/game/components/settings/GameSettings";
import GameScreen from "@/features/game/components/play/GameScreen";
import GameResult from "@/features/game/components/result/GameResult";
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

  if (isAppLoading) {
    return <AppLoader />;
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-6 py-20">
      {gameState.screen === SCREENS.Settings && (
        <GameSettings
          settings={gameState.settings}
          onStart={handleStartGame}
          onChangeSettings={handleChangeSettings}
        />
      )}

      {gameState.screen === SCREENS.Game && (
        <GameScreen
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
          onOpenSettings={handleOpenSettings}
          onStart={handleStartGame}
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
  );
}

export default App;
