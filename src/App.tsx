import {
  GameHistory,
  GameLoading,
  GamePlay,
  GameResult,
  GameSettings,
  useGameController,
} from "@/features/game";

import AppLoader from "@/shared/ui/AppLoader";
import FlyingBackground from "@/shared/ui/FlyingBackground";
import { useEffect, useState } from "react";
import { SCREENS } from "./features/game/constants/screens";

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  const { gameState, handlers } = useGameController();

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
              onStart={handlers.handleStartGame}
              onChangeSettings={handlers.handleChangeSettings}
            />
          )}

          {gameState.screen === SCREENS.Game && (
            <GamePlay
              settings={gameState.settings}
              tasks={gameState.tasks}
              currentTaskIndex={gameState.currentTaskIndex}
              onPreviousTask={handlers.handlePreviousTask}
              onNextTask={handlers.handleNextTask}
              onComplete={handlers.handleGameComplete}
            />
          )}

          {gameState.screen === SCREENS.Result && (
            <GameResult
              startedAt={gameState.startedAt ?? 0}
              completedAt={gameState.completedAt ?? 0}
              tasks={gameState.tasks}
              level={gameState.settings.level}
              difficulty={gameState.settings.difficulty}
              onOpenSettings={handlers.handleOpenSettings}
              onOpenHistory={handlers.handleOpenHistory}
              onRestart={handlers.handleStartGame}
            />
          )}

          {gameState.screen === SCREENS.History && (
            <GameHistory
              tasks={gameState.tasks}
              level={gameState.settings.level}
              difficulty={gameState.settings.difficulty}
              onBackToResult={handlers.handleOpenResult}
              onRestart={handlers.handleStartGame}
            />
          )}

          {gameState.screen === SCREENS.Loading && (
            <GameLoading
              settings={gameState.settings}
              onComplete={handlers.handleLoadingComplete}
              onOpenSettings={handlers.handleOpenSettings}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
