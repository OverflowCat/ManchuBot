var keys = {
    'version': '4'
    , 'tgbot': '114514:1919810telegramBotAPIkey'
    , 'scriptURL': "https://script.google.com/macros/s/1145141919810-gascr/exec" //u need to deploy first to get one
}

function setWebhook() {
    Logger.log(keys.tgbot);
    var whURL = "https://api.telegram.org/bot" + keys.tgbot + "/setwebhook?url=" + keys.scriptURL;
    var rtn = JSON.parse(UrlFetchApp.fetch(whURL));
    Logger.log(rtn);
}

//run to init
function setKeys() {
    var scriptProperties = PropertiesService.getScriptProperties();
    scriptProperties.setProperties(keys);
    setWebhook();
}