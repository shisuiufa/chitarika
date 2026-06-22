import { app, BrowserWindow, ipcMain, Menu  } from "electron";
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

  win.webContents.on("before-input-event", (event, input) => {
    if (input.key === "F11") {
      event.preventDefault();
    }
  });

  if (app.isPackaged) {
    void win.loadFile(path.join(__dirname, "../dist/index.html"));
  } else {
    void win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  ipcMain.handle("app:quit", () => {
    app.quit();
  });

  Menu.setApplicationMenu(null);

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
