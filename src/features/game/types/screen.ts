import { SCREENS } from "../constants/screens";

export type Screen = (typeof SCREENS)[keyof typeof SCREENS];
