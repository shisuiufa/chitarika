import { useModals } from "@/app/providers/modals-provider/hooks/useModals";
import { isElectronApp } from "@/shared/lib/electron/is-electron-app";
import { useEffect } from "react";

export function ExitGameHotkey() {
  const { open, close, modals } = useModals();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.repeat) {
        return;
      }

      if (!isElectronApp()) {
        return;
      }

      if (modals.length === 0) {
        open("ExitGameModal", {});
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, close, modals]);

  return null;
}
