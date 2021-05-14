const {
  app,
  BrowserWindow
} = require('electron')
const url = require("url");
const path = require("path");

function initWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minHeight: 600,
    minWidth: 940,
    frame:false,
    
    webPreferences: {
      nodeIntegration: true,
      "webSecurity":false,
      enableRemoteModule: true
    }
  })
  
  // Electron Build Path
  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  /* appWindow.webContents.openDevTools() */ //DEV TOOLS HERE!!!
  appWindow.on('closed', function () {
    appWindow = null
  })
  appWindow.webContents.openDevTools()
}


app.on('ready', initWindow)

// Close when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    initWindow()
  }
})