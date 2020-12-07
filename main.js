const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev'); // 判断是否是开发环境

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 768,
        height: 1280,
        webPreferences: {
            nodeIntegration: true,
        }
    })
    const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl';
    mainWindow.loadURL(urlLocation);

    // mainWindow.webContents.openDevTools(); // 打开开发者工具, 窗口右边栏;
})
