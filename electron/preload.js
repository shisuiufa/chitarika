console.log("preload loaded");

const { contextBridge, ipcRenderer } = require("electron");

const electronApp = {
  quit: () => ipcRenderer.invoke("app:quit"),
};

contextBridge.exposeInMainWorld("electronApp", electronApp);
