var API_KEY = "AIzaSyA1RsAC-kSki6CKIjahsr8e6cXHFWsSXqU";

var form = document.getElementById("request-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var request = document.getElementById("request").value;

  // Send data to Google Sheet using Google Sheets API
  var url = "https://sheets.googleapis.com/v4/spreadsheets/1_FiVG76DtiwfDsld4jimP3rfoM-99dbdZqnq5xQy9os/values/A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS&key=" + API_KEY;
  var data = {
    "range": "Sheet1",
    "majorDimension": "ROWS",
    "values": [
      [name, request]
    ]
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(function(response) {
    console.log("Data sent to Google Sheet!");
  })
  .catch(function(error) {
    console.log("Error sending data to Google Sheet: ", error);
  });
});
