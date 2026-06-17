import { app, BrowserWindow } from "electron";
import path from "node:path";

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    backgroundColor: "#fff8ef",
  });

  if (app.isPackaged) {
    void win.loadFile(path.join(process.cwd(), "dist/index.html"));
  } else {
    void win.loadURL("http://localhost:5173");
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
