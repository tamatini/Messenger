const electron = require('electron')
const {app, BrowserWindow} = electron;

let messenger

app.on('ready', function(){
    messenger = new BrowserWindow({
        width: 600,
        height: 400
    })
    messenger.show()
});
