function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log(ss.getSheetName());
}
/*
メモ欄
Logger.log(lastRow);
Browser.msgBox (meigen);
*/


function meigenBot(){
  //変数の定義
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  
  //ループ開始
  for(var i = 1; i <= lastRow ; i++){
    if(!sheet.getRange(i,4).getValue()){
      var body = sheet.getRange(i,1).getValue();
      sendMessage(body);
      sheet.getRange(i,4).setValue(true);
      break;
    }
  }
  
  Logger.log("今の出力行は" + i + "行目です(　･∀･)ﾉ");
  
  if(i >= lastRow){
    sheet.getRange(2,4,lastRow-1).clearContent();
    }
  
}

function sendMessage(body){
  var cw = ChatWorkClient.factory({token: 'a868e621d3594147f69c41946056b79e'});
  cw.sendMessageToMyChat(body);
}


