import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    backgroundColor: "#fff8ef",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (app.isPackaged) {
    void win.loadFile(path.join(process.cwd(), "dist/index.html"));
  } else {
    void win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  ipcMain.handle("app:quit", () => {
    console.log("app:quit received");
    app.quit();
  });

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
