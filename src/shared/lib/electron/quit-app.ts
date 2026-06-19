export async function quitApp() {
  console.log("quitApp called");
  console.log("window.electronApp:", window.electronApp);

  if (!window.electronApp) {
    console.error("window.electronApp is undefined");
    return;
  }

  await window.electronApp.quit();
}
