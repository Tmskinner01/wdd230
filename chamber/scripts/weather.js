const forecastDiv = document.querySelector("#weather");

const url ="https://api.openweathermap.org/data/2.5/forecast?lat=41.44&lon=-85.26&units=imperial&appid=c3a481b8aa73ea807721709f758d88c3";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        //console.log(error);
    }

}
apiFetch();

function displayResults(data) {
    getForecast(data, 5);
    getForecast(data, 12);
    getForecast(data, 20);
}

function getForecast(data, day) {
    let weatherDiv = document.createElement("div")
    let weekDay = document.createElement("h3");
    let currentTemp = document.createElement("h4");
    let captionDesc = document.createElement("p");
    let weathericon = document.createElement("img");
    currentTemp.innerHTML = `${data.list[day].main.temp} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[day].weather[0].icon}.png`;
    let desc = data.list[day].weather[0].description;
    weathericon.setAttribute("src", iconsrc);
    weathericon.setAttribute("alt", `${desc} icon`);
    captionDesc.textContent = `${capitalize(desc)}`;
    let forecastDate = data.list[day].dt_txt.substring(0,10);
    forecastDate = new Date(forecastDate)
    weekDay.textContent = weekdayString(forecastDate);

    weatherDiv.appendChild(weekDay)
    weatherDiv.appendChild(currentTemp);
    weatherDiv.appendChild(captionDesc);
    weatherDiv.appendChild(weathericon);

    weatherDiv.setAttribute("class","weather-div")
    forecastDiv.appendChild(weatherDiv);
    
};

function weekdayString(forecastDate) {
    let day = forecastDate.getDay();
    let weekDay = "none"
    if (day == 0) {
        weekDay = "Sunday";
    }
    else if (day == 1) {
        weekDay = "Monday";
    }
    else if (day == 2) {
        weekDay = "Tuesday";
    }
    else if (day ==3) {
        weekDay = "Wednesday";
    }
    else if (day == 4) {
        weekDay = "Thursday";
    }
    else if (day == 5) {
        weekDay = "Friday";
    }
    else if (day == 6) {
        weekDay = "Saturday";
    };
    return weekDay
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}