/*global require __dirname*/

const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('ready', function(){
	mainWindow = new BrowserWindow({width:800, height:700});

	mainWindow.loadURL('file://'+__dirname+'/index.html');

	mainWindow.on('closed', function(){
		mainWindow = null;
	});
});
