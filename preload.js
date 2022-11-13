const os = require('os');
const path = require('path');
const Toastify = require('toastify-js');
const { contextBridge, ipcRenderer } = require('electron');
// const electron = require('electron');
// const path = require('path');
// const { app, BrowserWindow, Menu, ipcMain } = require('electron');

contextBridge.exposeInMainWorld('os', {
  homedir: () => os.homedir(),
});

contextBridge.exposeInMainWorld('os', {
  join: (...args) => path.join(...args),
});

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
});

contextBridge.exposeInMainWorld('Toastify', {
  toast: (options) => Toastify(options).showToast(),
});
