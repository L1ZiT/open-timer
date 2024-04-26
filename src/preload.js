const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('appControl', {
  closeApp: () => ipcRenderer.invoke('close-app')
});