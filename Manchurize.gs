//env properties
var scriptProperties = PropertiesService.getScriptProperties();
var keys = scriptProperties.getKeys();

function isManchuScript(str) {
  //return (/(([\u1800-\u18AA\u00AB\u00BB\u2039\u203A\?\!\u203D\u2E2E])+\s*((-*—?[0-9])+\s+)*)+$/.test(str));
  return (/[\u1800-\u18AA]/.test(str));
}

function deManchurize(str) {
  var tmp = "";
  if (str.length > 0) {
    for (var i = 0; i < str.length; i++) {
      var val = str.charAt(i);
      var prev = " ";
      if (i > 0) {
        prev = str.charAt(i - 1);
      }
      if (val == "ᠠ") {
        tmp += "a";
      } else if (val == "ᡝ") {
        tmp += "e";
      } else if (val == "ᡳ") {
        tmp += "i";
      } else if (val == "ᠣ") {
        tmp += "o";
      } else if (val == "ᡠ") {
        tmp += "u";
      } else if (val == "ᡡ") {
        tmp += "v";
      } else if (val == "@") {
        tmp += "ᡡ";
      } else if (val == "ᠨ") {
        tmp += "n";
      } else if (val == "ᠩ") {
        tmp += "N";
      } else if (val == "ᠪ") {
        tmp += "b";
      } else if (val == "ᡦ") {
        tmp += "p";
      } else if (val == "ᡧ") {
        tmp += "x";
      } else if (val == "ᡧ") {
        tmp += "S";
      } else if (val == "ᡴ") {
        tmp += "k";
      } else if (val == "ᡤ" || val == "ᠩ") {
        /*       if (prev == "ᠨ" || prev == "n") {
          tmp = tmp.substring(0, tmp.length - 1);
          tmp += "ᠩ";
        } else {
          tmp += "ᡤ";
        }
        */
        tmp += "g";
      } else if (val == "ᡥ") {
        tmp += "h";
      } else if (val == "ᠮ") {
        tmp += "m";
      } else if (val == "ᠯ") {
        tmp += "l";
      } else if (val == "ᡨ") {
        tmp += "t";
      } else if (val == "ᡩ") {
        tmp += "d";
      } else if (val == "ᠰ") { // || val == "ᡮ") {
        /*        if (prev == "ᡨ" || prev == "t") {
          tmp = tmp.substring(0, tmp.length - 1);
          tmp += "ᡮ";
        } else {
          tmp += "ᠰ";
        }
*/
        tmp += "s";
      } else if (val == "ᡮ") { //ᠴ
        tmp += "c";
      } else if (val == "ᠴ") {
        tmp += "q";
      } else if (val == "ᠵ") {
        tmp += "j";
      } else if (val == "ᠶ") {
        tmp += "y";
      } else if (val == "ᡵ") {
        tmp += "r";
      } else if (val == "ᠸ") {
        tmp += "w";
      } else if (val == "ᡶ") {
        tmp += "f";
      } else if (val == "ᠺ") {
        tmp += "K";
      } else if (val == "ᡬ") {
        tmp += "G";
      } else if (val == "ᡭ") {
        tmp += "H";
      } else if (val == "ᡷ") {
        tmp += "J";
      } else if (val == "ᡱ") {
        tmp += "C";
      } else if (val == "ᡰ") {
        tmp += "R";
      } else if (val == "ᡯ") { // "z") {
        /* if (prev == "ᡩ" || prev == "d") {
        tmp = tmp.substring(0, tmp.length - 1);
        tmp += "z";
        } else {
        */
        tmp += "z";
        //}
      } else if (val == "'") {
        tmp += "\u180B";
      } else if (val == "᠉") {
        tmp += "."
      } else if (val == "᠈") {
        tmp += ","
      } else if (val == "\u180C") {
        tmp += "\\";
      } else if (val == "\u180D") {
        tmp += "`";
      } else if (val == "\u180E") {
        tmp += "_";
      } else if (val == "\u202F") {
        tmp += "-";
      } else if (val == "\u200D") {
        tmp += "*";
      } else {
        tmp += val;
      }
    }
  }
  return tmp;
}

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
      } else if (val == "@" || val == "ū") {
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
      } else if (val == "S" || val == "š" || val == "x") {
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
      } else if (val == "c" || val == "q") {
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
          tmp += "ᡯ"; //"z" org
        }
      } else if (val == "'") {
        tmp += "\u180B";
      } else if (val == "." || val == ":") {
        tmp += "᠉"
      } else if (val == ",") {
        tmp += "᠈"
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
    //var tgBotkey = "913536936:AAFuK-Wtrpv3y0ZTuItUAelyQXIYtAQ1pE8";
  var rtn = JSON.parse(UrlFetchApp.fetch("https://api.telegram.org/bot" + keys.tgbot + "/", data));

  //debug
  var payload = {
    "method": "sendMessage",
    "chat_ID": "405582582",
    "text": "DEBUG" // + e.postData.contents.toString()
  }


  function identificar(e) {
    if (e.inline_query) {
      var q = e.inline_query;
      if (isManchuScript(q.query)) {
        var r = deManchurize(q.query);
      } else {
        var r = Manchurize(q.query);
      }
      var result = {
        type: "article",
        id: "5681",
        title: "result",
        description: r,
        input_message_content: {
          message_text: r,
          parse_mode: "Markdown"
        }
      };
      var mensaje = {
        method: "answerInlineQuery",
        inline_query_id: e.id,
        results: JSON.stringify([result])
      };

    } else {
      cid = e.message.chat.id;
      if (e.message.text) {
        var t = e.message.text;

        function slashcmd(cmd) {
          var t_ = e.message.text + " ";
          if (cmd.charAt(0) != "/") cmd = "/" + cmd;
          if (t_.substr(0, cmd.length + 1) == cmd + " ") {
            return (t_.substring(cmd.length + 1, t_.length - 1));
          }
          return false;
        }

        var r = t;
        if (!(slashcmd('/start') === false) || !(slashcmd('/help') === false) || !(slashcmd('/h') === false)) {
          r = "Type Manju gisun to get transliterations and vice versa."
        } else {
          if (isManchuScript(t)) {
            r = deManchurize(t);
          } else {
            r = Manchurize(t);
          }
        }
        var mensaje = {
          "method": "sendMessage",
          "parse_mode": "HTML",
          "chat_id": cid,
          "text": r
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
    }
    return mensaje;
  }
}
