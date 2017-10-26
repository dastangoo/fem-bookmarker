// const electron = require('electron');
// const app = electron.app;

const { app, BrowserWindow } = require('electron');


let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 600,
    // titleBarStyle: 'hidden-inset'
    show: false
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.loadURL('http://www.google.com');
  // require('devtron').install();
});


