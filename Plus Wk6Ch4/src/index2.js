//let apiKey = "d39ce8ff9d1759f7774db77eea87b7a2";

//1.
let current = new Date();
console.log(current);
let date = current.getDate();
function formatDate() {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  let day = days[current.getDay()];
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[current.getMonth()];
  let displayCurrentDate = document.querySelector("#current-date-month-day");
  displayCurrentDate.innerHTML = `${date} ${month}, ${day}`;
}
formatDate();

let hour = current.getHours();
let displayCurrentHours = document.querySelector("#current-hours");
if (hour < 10) {
  displayCurrentHours.innerHTML = `0${hour}:`;
} else {
  displayCurrentHours.innerHTML = `${hour}:`;
}

let minute = current.getMinutes();
let displayCurrentMinutes = document.querySelector("#current-minutes");
if (minute < 10) {
  displayCurrentMinutes.innerHTML = `0${minute}`;
} else {
  displayCurrentMinutes.innerHTML = `${minute}`;
}

//2.
function displayCurrentCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#current-city");
  let displayCity = document.querySelector(".display-city");
  displayCity.innerHTML = `${cityInput.value}`;
}
let cityForm = document.querySelector(".search-city");
cityForm.addEventListener("submit", displayCurrentCity);

//HW5

function displayMetricTemperature(response) {
  let currentCity = document.getElementById("display-city");
  let currentTemp = document.getElementById("real-temperature");
  let temperature = Math.round(response.data.main.temp);
  currentCity.innerHTML = `${response.data.name}`;
  currentTemp.innerHTML = `${temperature}°C /`;
}

function getCurrentCity(event) {
  event.preventDefault();
  let city = document.getElementById("current-city").value;
  let apiKey = "d39ce8ff9d1759f7774db77eea87b7a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayMetricTemperature);
}

function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "d39ce8ff9d1759f7774db77eea87b7a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayMetricTemperature);
}

function getGeoLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
}

let getCurrentLocation = document.getElementById("use-current-location-button");
getCurrentLocation.addEventListener("click", getGeoLocation);

let searchCity = document.getElementById("search-city");
searchCity.addEventListener("submit", getCurrentCity);
