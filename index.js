const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 650,
    webPreferences: {
      nodeIntegration: true // Allows access to Node.js APIs in the renderer process
    }
  });

  mainWindow.loadURL('http://localhost:4200'); // Assuming your Angular app is served on localhost:4200

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
