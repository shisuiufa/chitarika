import { GAME_ACTIONS } from "../constants/game-actions";
import { gameReducer, initialGameState } from "./game-reducer";
import type { ReadingTask } from "../types/reading";
import type { GameSettingsState } from "../types/setting";
import { useReducer } from "react";

export function useGameController() {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);

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

  const handlePreviousTask = () => {
    dispatch({
      type: GAME_ACTIONS.PreviousTask,
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

  return {
    gameState,
    handlers: {
      handleStartGame,
      handleLoadingComplete,
      handleChangeSettings,
      handleNextTask,
      handlePreviousTask,
      handleGameComplete,
      handleOpenSettings,
      handleOpenResult,
      handleOpenHistory,
    },
  };
}
