// 1.Date Object:
function getTodaysName(dateString) {
    let YY_MM_DD = dateString.split("-");
    let year = parseInt(YY_MM_DD[0]);
    let month = parseInt(YY_MM_DD[1]) - 1;
    let day = parseInt(YY_MM_DD[2]);
    let date = new Date(year, month, day);
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
}
function getDay() {
    var inputElement = document.getElementById("datetime");
    var inputValue = inputElement.value;
    let dayOfWeek = getTodaysName(inputValue);
    if (dayOfWeek === undefined) {
        document.getElementById("Date").innerHTML = `
        <h3 class="text-red-500 font-bold">Please Enter the valid date using This Formate(YY-MM-DD) </h3>
        `
    }
    else {
        document.getElementById("Date").innerText ="The day of the week: "+ dayOfWeek;
    }
     return inputValue;
}


