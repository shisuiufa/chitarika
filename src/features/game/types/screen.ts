import { SCREENS } from "@/features/game/constants/screens";

export type Screen = (typeof SCREENS)[keyof typeof SCREENS];
