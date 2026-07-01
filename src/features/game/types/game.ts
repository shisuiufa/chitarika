import { GAME_ACTIONS } from "../constants/game-actions";
import type { ReadingTask } from "../types/reading";
import type { Screen } from "../types/screen";
import type { GameSettingsState } from "../types/setting";

export type GameState = {
  screen: Screen;
  settings: GameSettingsState;
  tasks: ReadingTask[];
  currentTaskIndex: number;
  startedAt: number | null;
  completedAt: number | null;
};

export type GameAction =
  | {
      type: typeof GAME_ACTIONS.SettingsChanged;
      payload: GameSettingsState;
    }
  | {
      type: typeof GAME_ACTIONS.GameStarted;
    }
  | {
      type: typeof GAME_ACTIONS.LoadingCompleted;
      payload: {
        tasks: ReadingTask[];
        startedAt: number;
      };
    }
  | {
      type: typeof GAME_ACTIONS.NextTask;
    }
  | {
      type: typeof GAME_ACTIONS.PreviousTask;
    }
  | {
      type: typeof GAME_ACTIONS.GameCompleted;
      payload: {
        completedAt: number;
      };
    }
  | {
      type: typeof GAME_ACTIONS.ResultOpened;
    }
  | {
      type: typeof GAME_ACTIONS.HistoryOpened;
    }
  | {
      type: typeof GAME_ACTIONS.SettingsOpened;
    };
