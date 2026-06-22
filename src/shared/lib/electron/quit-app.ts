export async function quitApp() {
  if (!window.electronApp) {
    return;
  }

  await window.electronApp.quit();
}
