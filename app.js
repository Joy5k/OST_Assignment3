// 1.Date Object:
function getTodaysName(dateString) {
    let dateParts = dateString.split("-");
    let year = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1;
    let day = parseInt(dateParts[2]);
    let date = new Date(year, month, day);
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
}
function getDay() {
    var inputElement = document.getElementById("datetime");
    var inputValue = inputElement.value;
    console.log(inputValue);
    let dayOfWeek =getTodaysName(inputValue);
  document.getElementById("Date").innerText ="The day of the week: "+ dayOfWeek;
     return inputValue;
}


