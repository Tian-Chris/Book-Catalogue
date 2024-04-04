function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Script Menu')
    .addItem('Add Book', 'addBook')
    .addItem('Test', 'test')
    .addSubMenu(SpreadsheetApp.getUi().createMenu('Randomize Next Read')
        .addItem('Priority Random', 'random')
        .addItem('Complete Random', 'completeRandom'))
    .addSeparator()
    .addItem('Complete Book', 'completeBook')
    .addToUi();
}

function addBook() {
  var ui = SpreadsheetApp.getUi();
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  
  var response = ui.prompt('Book Details', 'Enter the Title:', ui.ButtonSet.OK_CANCEL);
  var title = response.getResponseText();
  
  if (response.getSelectedButton() === ui.Button.OK && title) {
    var priorityResponse = ui.prompt('Book Details', 'Enter Priority: Reading, Plan to Read or None.', ui.ButtonSet.OK_CANCEL);
    var priority = priorityResponse.getResponseText();
    
    if (priorityResponse.getSelectedButton() === ui.Button.OK && priority) {
      var genreResponse = ui.prompt('Book Details', 'Enter Genre', ui.ButtonSet.OK_CANCEL);
      var genre = genreResponse.getResponseText();
      
      if (genreResponse.getSelectedButton() === ui.Button.OK && genre) {
        var themeResponse = ui.prompt('Book Details', 'Enter Theme', ui.ButtonSet.OK_CANCEL);
        var theme = themeResponse.getResponseText();

        if (themeResponse.getSelectedButton() === ui.Button.OK && theme) {
          var pageResponse = ui.prompt('Book Details', 'Enter Page Count', ui.ButtonSet.OK_CANCEL);
          var page = pageResponse.getResponseText();
          {
            if (pageResponse.getSelectedButton() === ui.Button.OK && page) {
              print(title, priority, genre, theme, page);
            }
          }  
        }
      } 
    }
  }
}



function print(title, priority, genre, theme, page) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    var temp = lastRow + 1;

    sheet.getRange(temp, 2).setValue(title);
    sheet.getRange(temp, 3).setValue(priority);
    sheet.getRange(temp, 4).setValue(genre);
    sheet.getRange(temp, 5).setValue(theme);
    createDoc(title, temp); // adds a hyperlink to a google docs file
    sheet.getRange(temp, 7).setValue(page);
    sheet.getRange(temp, 8).setValue(0);
    sheet.getRange(temp, 9).setValue("=H" + temp + "/G" + temp);

}


function createDoc(title, row) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var doc = DocumentApp.create(title + " Notes");

  var docUrl = doc.getUrl();

  var cell = sheet.getRange("F" + row);

  cell.setFormula('=HYPERLINK("' + docUrl + '","' + title + " Notes" + '")');
}
