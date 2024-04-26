const {app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 293,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true,
    resizable: false,
    maximizable: false,
    frame: false,
    icon: path.join(__dirname, 'open-timer-icon.png'),
    alwaysOnTop: true,
  });

  win.loadFile('src/index.html');
}

app.whenReady().then(() => {
  ipcMain.handle('close-app', () => {
    app.quit();
  });
  createWindow();
});