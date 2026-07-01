import { DIFFICULTIES } from "../constants/difficulties";
import { GAME_ACTIONS } from "../constants/game-actions";
import { LEVELS } from "../constants/levels";
import { SCREENS } from "../constants/screens";
import type { GameAction, GameState } from "../types/game";

export const initialGameState: GameState = {
  screen: SCREENS.Settings,
  settings: {
    level: LEVELS.Syllables,
    difficulty: DIFFICULTIES.Easy,
    answers: 1,
  },
  tasks: [],
  currentTaskIndex: 0,
  startedAt: null,
  completedAt: null,
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case GAME_ACTIONS.SettingsChanged: {
      return {
        ...state,
        settings: action.payload,
      };
    }

    case GAME_ACTIONS.GameStarted: {
      return {
        ...state,
        screen: SCREENS.Loading,
        tasks: [],
        currentTaskIndex: 0,
        startedAt: null,
        completedAt: null,
      };
    }

    case GAME_ACTIONS.LoadingCompleted: {
      return {
        ...state,
        screen: SCREENS.Game,
        tasks: action.payload.tasks,
        startedAt: action.payload.startedAt,
      };
    }

    case GAME_ACTIONS.NextTask: {
      if (state.tasks.length === 0) {
        return state;
      }

      return {
        ...state,
        currentTaskIndex: Math.min(
          state.currentTaskIndex + 1,
          state.tasks.length - 1,
        ),
      };
    }

    case GAME_ACTIONS.PreviousTask: {
      if (state.tasks.length === 0) {
        return state;
      }

      return {
        ...state,
        currentTaskIndex: Math.max(state.currentTaskIndex - 1, 0),
      };
    }

    case GAME_ACTIONS.GameCompleted: {
      return {
        ...state,
        screen: SCREENS.Result,
        completedAt: action.payload.completedAt,
      };
    }

    case GAME_ACTIONS.ResultOpened: {
      return {
        ...state,
        screen: SCREENS.Result,
      };
    }

    case GAME_ACTIONS.HistoryOpened: {
      return {
        ...state,
        screen: SCREENS.History,
      };
    }

    case GAME_ACTIONS.SettingsOpened: {
      return initialGameState;
    }

    default: {
      return state;
    }
  }
}
