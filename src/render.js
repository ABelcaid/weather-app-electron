const api = {
    key: "f06ac5c5dba4873e3dbde1542b463d5c",
    base: "http://api.openweathermap.org/data/2.5/"
}


let search = document.getElementById('searchCity');
search.addEventListener('keypress', getInput)

function getInput(e) {
    if (e.key === 'Enter') {
        getResults(search.value);
    }
}

function getResults(city) {

    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);

}

function displayResults(weather) {

    let city = document.getElementById('city');
    let temperature = document.getElementById('temperature');
    let minMax = document.getElementById('minMax');
    let icon = document.getElementById('icon');
    let iconcode = weather.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";


    city.innerText = `${weather.name}, ${weather.sys.country}`;
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    minMax.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
    icon.setAttribute("src", iconurl);

}