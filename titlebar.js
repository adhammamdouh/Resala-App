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
    window.isMaximized()? (window.unmaximize(),toggleRadius()) : (toggleRadius(),window.maximize());
}

function closeWindow() {
    let window = remote.getCurrentWindow();
    window.close();
}

function toggleRadius(){
    let window = remote.getCurrentWindow();
    window.isMaximized()? document.getElementsByClassName('main')[0].style.borderRadius = "0px": document.getElementsByClassName('main')[0].style.borderRadius = "0px";
}