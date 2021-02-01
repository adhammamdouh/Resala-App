const {remote} = require('electron');

document.getElementById('min').addEventListener('click',minimizeWindow);
document.getElementById('max').addEventListener('click',maxmizeWindow);
document.getElementById('close').addEventListener('click',closeWindow);

function minimizeWindow(){
    let window = remote.getCurrentWindow();
    window.minimize();
}

function maxmizeWindow() {
    let window = remote.getCurrentWindow();
    window.isMaximized()? window.unmaximize() : window.maximize();
}

function closeWindow() {
    let window = remote.getCurrentWindow();
    window.close();
}