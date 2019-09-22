const electron = require('electron');
const {app, BrowserWindow} = electron;

let messenger

app.on('ready', function(){
    messenger = new BrowserWindow({
        minWidth: 600,
        minHeight: 850
    });

    messenger.setMenu(null)
    messenger.loadURL('http://www.messenger.com/login')
    messenger.show();
});
