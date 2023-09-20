const apikey ="8e9efce9277b75e72f40f24c2f59f052";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("#weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    var data = await response.json();

   
 
document.querySelector(".city").innerHTML = data.name;
document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + " °C";
document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather [0].main == "Clouds"){
weatherIcon.src = "images/cloudy-7098479_1280-removebg-preview.png";
}
else if (data.weather[0].main == "clear"){

weatherIcon.src = "images/clear.png";
}
else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
}
else if (data.weather[0].main == "Drizzle"){
   weatherIcon.src = "images/drizzle.png"; 
}
else if (data.weather[0].main == "Mist"){
   weatherIcon.src = "images/mist.png"; 
}
document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
 checkweather(searchBox.value);

})
 checkweather();