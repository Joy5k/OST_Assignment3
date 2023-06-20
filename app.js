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
    let numberArray = numbers.split(","); 
    console.log(numberArray);
    let result = calculate(numberArray);
    console.log(result); 
    document.getElementById('result').innerHTML = `
    <h3 id="result" class="text-gray-500 font-bold"> The square root of the sum of squares result:- ${result} </h3>

    `
    document.getElementById('numbers').value=" " 
}

async function isPrime() {
    const number = await document.getElementById('isPrime').value;
  if (number < 2) {
    document.getElementById('isPrimeText').innerText="(false) No! it is not a prime number"
    console.log(false);
        return false;
      }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        console.log(false);
        document.getElementById('isPrimeText').innerText="(false) No! it is not a prime number"
        return false;
      }
  }
  console.log(true);
  document.getElementById('isPrimeText').innerText="(true) Yes! it is a prime number"
    return true;
}
// Window Object

  function openNewWindow(url, width, height) {
    window.open(url, '_blank', `width=${width}, height=${height}`);
}
// Please uncomment the function calling below
  
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

        // Please uncomment the alert message below.

      // alert(`Clicked at coordinates (x, y): ${x}, ${y}`);
    });

    // b. Keydown event handler
    document.addEventListener('keydown', function(event) {
      const keyCode = event.keyCode || event.which;

      // Please uncomment the alert message below.

      // alert(`Key pressed with key code: ${keyCode}`);
    });

    // c. Mouseover event handler
    const image = document.querySelector('#myImage');
    image.addEventListener('mouseover', function() {
      image.src = 'images.jpg';
    });
  });

//   8.HTML DOM Document:
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('myParagraph');
    button.addEventListener('click', function() {
      paragraph.textContent = 'Button Clicked!';
    });
  });

// Form Input
function validateForm(event) {
  event.preventDefault();
  const form = document.getElementById("myForm");
  const name = form.elements.name;
  const email = form.elements.email;
  const password = form.elements.password;
  const confirmPassword = form.elements.confirmPassword;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  const namePattern = /^[a-zA-Z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  nameError.textContent = !namePattern.test(name.value) ? "Name should contain only letters." : "";
  emailError.textContent = !emailPattern.test(email.value) ? "Please enter a valid email address." : "";
  passwordError.textContent = !passwordPattern.test(password.value) ? "Password should have a minimum length of 8 characters, one uppercase letter, one lowercase letter, and one digit." : "";
  confirmPasswordError.textContent = confirmPassword.value !== password.value ? "Confirm Password should match the Password field." : "";

  if (!nameError.textContent && !emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
      alert("Form submitted successfully!");
      form.reset();
  }
}
// 10.DOM Manipulate CSS Class:
function addHighlightClass() {
  let paragraph = document.getElementById("Paragraph");
  paragraph.classList.add("bg-yellow-400");
}

// 11.Create Element & Append Element:

function createListItems() {
  let ul = document.getElementById("myList");

  for (let i = 1; i <= 5; i++) {
      let li = document.createElement("li");
      li.textContent =`This is the li number ${i}`;
      li.classList.add("text-gray-800", "mb-2","bg-sky-400");
      ul.appendChild(li);
  }
}
function createLi() {
  createListItems()
}

// 12.DOM Change Attribute Value:
 function changeImage(){
  let image = document.getElementById("changeImage");
   image.src = "./images.jpg"; 
}

function changeTextColor() {
  let paragraphs = document.querySelectorAll(".changeTextColor");
  paragraphs.forEach(function(paragraph) {
      paragraph.style.color = "red";
  });
}

function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos/10")
    .then(response=> response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => { 
      console.error("Request failed:", error);
    });
}
getData();



function postData() {
  let url = "https://api.example.com/submit";
  let data = {
    name: "John Doe",
    email: "johndoe@example.com"
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response=> response.json())
    .then(responseData=> {
      console.log(responseData);
    })
    .catch(error => { 
      console.error("Request failed:", error);
    });
}
postData();

