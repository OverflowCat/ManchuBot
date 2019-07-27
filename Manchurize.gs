function Manchurize(str) {
  var tmp = "";
  if (str.length > 0) {
    for (var i = 0; i < str.length; i++) {
      var val = str.charAt(i);
      var prev = " ";
      if (i > 0) {
        prev = str.charAt(i - 1);
      }
      if (val == "a") {
        tmp += "ᠠ";
      } else if (val == "e") {
        tmp += "ᡝ";
      } else if (val == "i") {
        tmp += "ᡳ";
      } else if (val == "o") {
        tmp += "ᠣ";
      } else if (val == "u") {
        tmp += "ᡠ";
      } else if (val == "v") {
        tmp += "ᡡ";
      } else if (val == "@") {
        tmp += "ᡡ";
      } else if (val == "n") {
        tmp += "ᠨ";
      } else if (val == "N") {
        tmp += "ᠩ";
      } else if (val == "b") {
        tmp += "ᠪ";
      } else if (val == "p") {
        tmp += "ᡦ";
      } else if (val == "x") {
        tmp += "ᡧ";
      } else if (val == "S") {
        tmp += "ᡧ";
      } else if (val == "k") {
        tmp += "ᡴ";
      } else if (val == "g") {
        if (prev == "ᠨ" || prev == "n") {
          tmp = tmp.substring(0, tmp.length - 1);
          tmp += "ᠩ";
        } else {
          tmp += "ᡤ";
        }
      } else if (val == "h") {
        tmp += "ᡥ";
      } else if (val == "m") {
        tmp += "ᠮ";
      } else if (val == "l") {
        tmp += "ᠯ";
      } else if (val == "t") {
        tmp += "ᡨ";
      } else if (val == "d") {
        tmp += "ᡩ";
      } else if (val == "s") {
        if (prev == "ᡨ" || prev == "t") {
          tmp = tmp.substring(0, tmp.length - 1);
          tmp += "ᡮ";
        } else {
          tmp += "ᠰ";
        }
      } else if (val == "c") {
        tmp += "ᠴ";
      } else if (val == "j") {
        tmp += "ᠵ";
      } else if (val == "y") {
        tmp += "ᠶ";
      } else if (val == "r") {
        tmp += "ᡵ";
      } else if (val == "w") {
        tmp += "ᠸ";
      } else if (val == "f") {
        tmp += "ᡶ";
      } else if (val == "K") {
        tmp += "ᠺ";
      } else if (val == "G") {
        tmp += "ᡬ";
      } else if (val == "H") {
        tmp += "ᡭ";
      } else if (val == "J") {
        tmp += "ᡷ";
      } else if (val == "C") {
        tmp += "ᡱ";
      } else if (val == "R") {
        tmp += "ᡰ";
      } else if (val == "z") {
        if (prev == "ᡩ" || prev == "d") {
          tmp = tmp.substring(0, tmp.length - 1);
          tmp += "ᡯ";
        } else {
          tmp += "z";
        }
      } else if (val == "'") {
        tmp += "\u180B";
      } else if (val == "\"") {
        tmp += "\u180C";
      } else if (val == "`") {
        tmp += "\u180D";
      } else if (val == "_") {
        tmp += "\u180E";
      } else if (val == "-") {
        tmp += "\u202F";
      } else if (val == "*") {
        tmp += "\u200D";
      } else {
        tmp += val;
      }
    }
  }
  return tmp;
}


function doPost(e) {
    var estringa = JSON.parse(e.postData.contents);
    var payload = identificar(estringa);
    var data = {
      "method": "post",
      "payload": payload
    }
    var tgBotkey = "9********:AAFuK-ManchuNiyalma de tusa ara";
    var rtn = JSON.parse(UrlFetchApp.fetch("https://api.telegram.org/bot" + tgBotkey + "/", data));

    //debug
    var payload = {
      "method": "sendMessage",
      "chat_ID": "405582582",
      "text": "DEBUG" // + e.postData.contents.toString()
    }


    function identificar(e) {
      cid = e.message.chat.id;
      if (e.message.text) {

        var mensaje = {
          "method": "sendMessage",
          "parse_mode": "HTML",
          "chat_id": cid,
          "text": Manchurize(e.message.text)
        }
      } else if (e.message.sticker) {
        var mensaje = {
          "method": "sendSticker",
          "chat_id": e.message.chat.id,
          "sticker": 'CAADBQADCgIAAgsiPA6YQhC2cRBPowI' //e.message.sticker.file_id
        }
      } else if (e.message.photo) {
        var array = e.message.photo;
        var text = array[1];
        var mensaje = {
          "method": "sendPhoto",
          "chat_id": e.message.chat.id,
          "photo": text.file_id
        }
      } else {
        var mensaje = {
          "method": "sendMessage",
          "chat_id": e.message.chat.id,
          "text": "Send me Manchu gisun plz - -"
        }
      }

      return mensaje;
    }
