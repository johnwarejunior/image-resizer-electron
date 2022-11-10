const os = require('os');
const path = require('path');
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('os', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // we can also expose variables, not just functions
});
