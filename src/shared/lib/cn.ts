import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge, validators } from "tailwind-merge";

type CustomClassGroup =
  | "px-vw"
  | "py-vh"
  | "text-vh"
  | "gap-vw"
  | "rounded-vh"
  | "size-vh";

const customTwMerge = extendTailwindMerge<CustomClassGroup>({
  extend: {
    classGroups: {
      "px-vw": [{ "px-vw": [validators.isArbitraryValue] }],
      "py-vh": [{ "py-vh": [validators.isArbitraryValue] }],
      "text-vh": [{ "text-vh": [validators.isArbitraryValue] }],
      "gap-vw": [{ "gap-vw": [validators.isArbitraryValue] }],
      "rounded-vh": [{ "rounded-vh": [validators.isArbitraryValue] }],
      "size-vh": [{ "size-vh": [validators.isArbitraryValue] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
