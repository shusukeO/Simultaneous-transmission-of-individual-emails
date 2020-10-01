function myFunction() {
  
  //シートからデータを取得
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  
  var template_html = HtmlService.createTemplateFromFile("index");
  var address;
  var html;
  var i;
  for(i = 0; i < rows.length; i++){
    
    address = rows[i][0];
    template_html.name = rows[i][1];
    template_html.login_mail = rows[i][2];
    template_html.login_pass = rows[i][3];
    html = template_html.evaluate().getContent();
    
    // メール送信
    MailApp.sendEmail(
      address,
      '英語IIB The Japan Times Liteプランの利用案内',
      template_html.name  + 'さん\n\n名前です。\n\nあなたの登録メールアドレスは' + template_html.login_mail + '、パスワードは' + template_html.login_pass + 'です。\n\\n名前\n\n※HTMLがうまく表示できていないようです。メーラーを変更すると解決できます。',
      {htmlBody: html}
    );
  }    
}
