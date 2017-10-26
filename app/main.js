// const electron = require('electron');
// const app = electron.app;
// console.log('Hello from Electron.');
const { app, BrowserWindow } = require('electron');


let mainWindow = null;

app.on('ready', () => {
  // console.log('I am ready');
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
  require('devtron').install();
});
// console.log('Hello');

