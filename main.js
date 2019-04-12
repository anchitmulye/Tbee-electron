const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const shell = require('electron').shell
const ipc = require('electron').ipcMain
const { remote } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow()
  win.maximize()

  // and load the index.html of the app.
  win.loadFile('src/home.html')

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
  function openAboutWindow(){
    let aboutWindow = new BrowserWindow({
      parent: win,
      modal: true,
      show: false,
      width: 1280,
      height: 720
    })
    aboutWindow.loadURL(url.format({
      pathname: path.join(__dirname,'src/ABOUT.html'),
      protocol: 'file',
      slashes: true
    }))
    aboutWindow.setMenu(null)
    aboutWindow.once("ready-to-show", ()=>{
      aboutWindow.show()
    })
  }

  function openFAQWindow(){
    let FAQWindow = new BrowserWindow({
      parent: win,
      modal: true,
      show: false,
      width: 1280,
      height: 720
    })
    FAQWindow.loadURL(url.format({
      pathname: path.join(__dirname,'src/FAQ.html'),
      protocol: 'file',
      slashes: true
    }))
    FAQWindow.setMenu(null)
    FAQWindow.once("ready-to-show", ()=>{
      FAQWindow.show()
    })
  }

  function openDeveloperWindow(){
    let DeveloperWindow = new BrowserWindow({
      parent: win,
      modal: true,
      show: false,
      width: 1280,
      height: 720
    })
    DeveloperWindow.loadURL(url.format({
      pathname: path.join(__dirname,'src/Developers credits.html'),
      protocol: 'file',
      slashes: true
    }))
    DeveloperWindow.setMenu(null)
    DeveloperWindow.once("ready-to-show", ()=>{
      DeveloperWindow.show()
    })
  }

  var menu = Menu.buildFromTemplate([
        {
        label: 'File',
            submenu: [
              {
                label:'Quit',
                accelerator: "Alt+F4",//"CmdOrCtrl+Q",
                click() { 
                  app.quit() 
                } 
            },
                {label:'Relaunch',
                accelerator: "Ctrl+F5",
                  click(){
                    app.relaunch()
                    app.exit(0)
                  }
                }
            ]
        },
        {
        label: 'View',
            submenu: [
                {label:'Reload',
                accelerator: "F5",
                click() { 
                  win.reload()
                 }
               },
                {label:'Developer',
                click: ()=>{
                  openDeveloperWindow()
                }
                },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { role: 'forcereload' },
                { type: 'separator' },
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        {
          label: 'Tools',
              submenu: [
                  {label:'Recommended'},
                  {label:'Notification'}
              ]
        },
        {
          label: 'Application',
              submenu:[
              {label:'About',
                click: ()=>{
                  openAboutWindow()
                }
              },
              {label:'FAQ',
                click: ()=>{
                  openFAQWindow()
                }
              }
              ]
        },
        {      
              label: 'Help',
              submenu:[
                {label:'Learn More'},
                {label:'Documentations'},
                {label:'Issues'}
              ]
        }
])
Menu.setApplicationMenu(menu); 
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on('update-user', function(event, arg){
  win.webContents.send('userid',arg)
})
