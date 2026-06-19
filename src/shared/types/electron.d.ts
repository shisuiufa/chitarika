import type { ElectronAppApi } from "@/shared/lib/electron/types";

export {};

declare global {
  interface Window {
    electronApp?: ElectronAppApi;
  }
}
