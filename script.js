let place_name = "New Delhi";
let key = "b330ba9274582c195c94173ad084cc2a";

function func() {
let place = document.getElementById("searcher");
place_name = place.value;
console.log(place_name);
fetchWeather();
}

async function fetchWeather() {
let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    place_name +
    "&appid=" +
    key +
    "&units=metric";
const res = await fetch(url);
const data = await res.json();
const { name } = data;
const { temp } = data.main;
document.getElementById("Weatherin").innerHTML = "Weather in " +name;
document.getElementById("Temp").innerHTML = temp + "*C";
}
fetchWeather()