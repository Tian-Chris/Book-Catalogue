function changeColorValue() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("I6:I" + lastRow);
  var values = range.getValues();
  
  //Changes Status color value based on the percentage
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] >= 0 && values[i][0] < 0.1) {
      range.getCell(i + 1, 1).setBackground('#ff6262'); // light red to green
    }

    if (values[i][0] >= 0.1 && values[i][0] < 0.2) {
      range.getCell(i + 1, 1).setBackground('#ff8d75'); 
    }

    if (values[i][0] >= 0.2 && values[i][0] < 0.3) {
      range.getCell(i + 1, 1).setBackground('#ff9c65'); 
    }

    if (values[i][0] >= 0.3 && values[i][0] < 0.4) {
      range.getCell(i + 1, 1).setBackground('#ffab55'); 
    }

    if (values[i][0] >= 0.4 && values[i][0] < 0.5) {
      range.getCell(i + 1, 1).setBackground('#ffc056');  
    }

    if (values[i][0] >= 0.5 && values[i][0] < 0.6) {
      range.getCell(i + 1, 1).setBackground('#ffd656');  
    }

    if (values[i][0] >= 0.6 && values[i][0] < 0.7) {
      range.getCell(i + 1, 1).setBackground('#efea59');  
    }

    if (values[i][0] >= 0.7 && values[i][0] < 0.8) {
      range.getCell(i + 1, 1).setBackground('#effe5b');  
    }

    if (values[i][0] >= 0.8 && values[i][0] < 0.9) {
      range.getCell(i + 1, 1).setBackground('#d4ff71');  
    }

    if (values[i][0] >= 0.9 && values[i][0] < 1) {
      range.getCell(i + 1, 1).setBackground('#b9ff50');  
    }

    if (values[i][0] == 1) {
      range.getCell(i + 1, 1).setBackground('#9eff2f');  
    }
  }
}


function changeColorValuePriority() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange('C6:C' + lastRow);
  var values = range.getValues();

  for (var i = 0; i < values.length; i++) {
    var priority = values[i][0]; // Get the value of the cell in the range
    var color = '0'; // Initialize color variable

    // Determine the color based on priority value
    if (priority == 'Reading') {
      color = '#ffff00'; 
    } 

    if (priority == 'Plan to Read') {
      color = '#f1c232'; 
    } 

    if (priority == 'None') {
      color = '#4285f4'; 
    }

    if(color == '0') {
      range.getCell(i + 1, 1).clear({ backgroundColorOnly: true });
    }

    if(color != '0'){
      range.getCell(i + 1, 1).setBackground(color);
      color = '0';
    }

  }
}


