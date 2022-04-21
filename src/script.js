alert("Hello Netlify!");
// Display Temperature

function displayTemperature(response) {
  document.querySelector("#displayedCity").innerHTML = response.data.name;
  document.querySelector("#country").innerHTML = response.data.sys.country;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#sky").innerHTML = response.data.weather[0].main;
  document.querySelector("#humidityData").innerHTML =
    response.data.main.humidity;
  document.querySelector("#windData").innerHTML = Math.round(
    response.data.wind.speed
  );
}

// Search bar
function searchCity(city) {
  let apiKey = "1c59aa10195cdb81c9ef5cae00f1f45d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function showSearchedCity(event) {
  event.preventDefault();
  let city = document.querySelector("#searchedCity").value;
  searchCity(city);
}

let searchForm = document.querySelector("#searchCityForm");
searchForm.addEventListener("submit", showSearchedCity);

// Current Location Button
function searchCurrentLocation(position) {
  let apiKey = "1c59aa10195cdb81c9ef5cae00f1f45d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function findCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
}

let currentLocationBtn = document.querySelector("#currentLocationButton");
currentLocationBtn.addEventListener("click", findCurrentLocation);

// Add to my favorite Button
function addToFavorite(event) {
  event.preventDefault();
  let favoriteOne = document.querySelector("#favoriteCityOne");
  let chosenCity = document.querySelector("#displayedCity");
  favoriteOne.innerHTML = chosenCity.value;
}

let addToFavoriteBtn = document.querySelector("#addFavButton");
addToFavoriteBtn.addEventListener("click", addToFavorite);

// Current Date
let now = new Date();
let displayedDayTime = document.querySelector(".day-time");
let displayedDate = document.querySelector(".date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();

displayedDayTime.innerHTML = `${day}, ${hours}:${minutes}`;

displayedDate.innerHTML = `${month} ${date}, ${year}`;

// Fahrenheit/Celsius Link
function changeUnitToFahrenheit(event) {
  event.preventDefault();
  let tempNumber = document.querySelector("#temperature");
  tempNumber.innerHTML = "66";
}
let fahrenheitClick = document.querySelector("#fahrenheit-link");
fahrenheitClick.addEventListener("click", changeUnitToFahrenheit);

function changeUnitToCelsius(event) {
  event.preventDefault();
  let tempNumber = document.querySelector("#temperature");
  tempNumber.innerHTML = "19";
}
let celsiusClick = document.querySelector("#celsius-link");
celsiusClick.addEventListener("click", changeUnitToCelsius);

// Searched city on load
searchCity("Tbilisi");
