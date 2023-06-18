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
// Display the day of the week

function getDay() {
    let inputElement = document.getElementById("datetime");
    let inputValue = inputElement.value;
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

// 2.Math Object:
function calculate(numbers) {
    let sumOfSquares = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sumOfSquares += numbers[i] * numbers[i];
    }
  
    let squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
}

function math() {
    let numbers = document.getElementById('numbers').value;
    let numberArray = numbers.split(","); // Split the input into an array using comma as the delimiter
    console.log(numberArray);
    let result = calculate(numberArray);
    console.log(result); // Output: 7.416198487095663
    document.getElementById('numbers').value=" "
    
      
}


