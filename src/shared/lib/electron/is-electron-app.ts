export function isElectronApp() {
  return typeof window !== "undefined" && Boolean(window.electronApp);
}
