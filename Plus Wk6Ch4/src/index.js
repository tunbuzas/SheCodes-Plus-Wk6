let weather = [
  {
    name: "Paris",
    temp: 19.7,
    humidity: 80
  },
  {
    name: "Tokyo",
    temp: 17.3,
    humidity: 50
  },
  {
    name: "Lisbon",
    temp: 30.2,
    humidity: 20
  },
  {
    name: "San Francisco",
    temp: 20.9,
    humidity: 100
  },
  {
    name: "Moscow",
    temp: -5,
    humidity: 20
  }
];

//console.log(weather[1].temp);
//console.log(Math.round(weather[].temp));
//function showTemp(city) {
//console.log(city)

//}
//function showTemp(city) {
//alert(city)
//};
//weather.forEach(showTemp);
//ask the user "Enter a city" (example: Paris), alert "It is currently 19°C (66°F) in Paris with a humidity of 80%"
//alert "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"

let currentCity = prompt("Enter a city");
if (currentCity !== null) {
  currentCity = currentCity.toUpperCase();
  currentCity = currentCity.trim();
}
if (currentCity === "PARIS") {
  alert(
    "It is currently " +
      Math.round(weather[0].temp) +
      "°C (" +
      Math.round(weather[0].temp * 1.8 + 32) +
      "°F) in Paris with a humidity of " +
      weather[0].humidity +
      "%."
  );
}
if (currentCity === "TOKYO") {
  alert(
    "It is currently " +
      Math.round(weather[1].temp) +
      "°C (" +
      Math.round(weather[1].temp * 1.8 + 32) +
      "°F) in Tokyo with a humidity of " +
      weather[1].humidity +
      "%."
  );
}
if (currentCity === "LISBON") {
  alert(
    "It is currently " +
      Math.round(weather[2].temp) +
      "°C (" +
      Math.round(weather[2].temp * 1.8 + 32) +
      "°F) in Lisbon with a humidity of " +
      weather[2].humidity +
      "%."
  );
}
if (currentCity === "SAN FRANCISCO") {
  alert(
    "It is currently " +
      Math.round(weather[3].temp) +
      "°C (" +
      Math.round(weather[3].temp * 1.8 + 32) +
      "°F) in San Francisco with a humidity of " +
      weather[3].humidity +
      "%."
  );
}
if (currentCity === "MOSCOW") {
  alert(
    "It is currently " +
      Math.round(weather[4].temp) +
      "°C (" +
      Math.round(weather[4].temp * 1.8 + 32) +
      "°F) in Moscow with a humidity of " +
      weather[4].humidity +
      "%."
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
      currentCity +
      "."
  );
}
