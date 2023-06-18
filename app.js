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
    document.getElementById('result').innerHTML = `
    <h3 id="result" class="text-gray-500 font-bold"> The square root of the sum of squares result:- ${result} </h3>

    `
    document.getElementById('numbers').value=" " 
}

async function isPrime() {
    const number = await document.getElementById('isPrime').value;
    if (number < 2) {
        return false;
      }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
        return false;
      }
    }
    return true;
}
// Window Object

  function openNewWindow(url, width, height) {
    window.open(url, '_blank', `width=${width}, height=${height}`);
  }
// openNewWindow("https://www.example.com", 800, 600);
  

// 5.Navigator Object:

function getBrowserInfo() {
    const browserName = navigator.userAgent;
    const browserVersion = navigator.appVersion;
  
    return { name: browserName, version: browserVersion };
  }

  function displayBrowserInfo() {
    const browserInfo = getBrowserInfo();
    console.log(`Browser Name: ${browserInfo.name}`);
    console.log(`Browser Version: ${browserInfo.version}`);
      document.getElementById('browserName').innerHTML = `
      <p id="browserName" class="font-semibold">Your browser name :- ${browserInfo.name}</p>
      `
      document.getElementById('browserVersion').innerHTML = `
      <p id="browserName" class="font-semibold">Your browser version :-<span> ${browserInfo.version}</span></p>
      `
  }
  
displayBrowserInfo();
  
// 6.Geolocation:

getCurrentLocation();

function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}`);
          console.log(`Longitude: ${longitude}`);
        },
        function (error) {
          console.log(`Error retrieving location: ${error.message}`);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
}
  
// 7.JS Common Events:
  document.addEventListener('DOMContentLoaded', function() {
    // a. Click event handler
    document.addEventListener('click', function(event) {
      const x = event.clientX;
      const y = event.clientY;
      alert(`Clicked at coordinates (x, y): ${x}, ${y}`);
    });

    // b. Keydown event handler
    document.addEventListener('keydown', function(event) {
      const keyCode = event.keyCode || event.which;
      alert(`Key pressed with key code: ${keyCode}`);
    });

    // c. Mouseover event handler
    const image = document.querySelector('#myImage');
    image.addEventListener('mouseover', function() {
      image.src = 'images.jpg';
    });
  });

//   8.HTML DOM Document:
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and paragraph elements
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('myParagraph');

    // Add click event listener to the button
    button.addEventListener('click', function() {
      paragraph.textContent = 'Button Clicked!';
    });
  });

