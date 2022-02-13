import React, { useEffect } from 'react';
import useGet from "../hooks/useGet";
import { useGlobal } from "../context/GlobalContext";
import "../App.css"
import config from "../utils/config.json"

function DailyWeather() {
    const { selectedCity } = useGlobal();
    const { responseData, get } = useGet();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    useEffect(() => {
        const getData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&exclude=hourly,minutely,current&appid=${config.openWeatherAPIKey}`;

            await get(url);
        }

        if (selectedCity) {
            getData();
        }
    }, [selectedCity]);

    return (
        <div style={{ display: "inline-block", }}>
            {
                responseData &&
                responseData.data.daily.map((day, index) => {
                    let date = new Date(day.dt * 1000);
                    // console.log("Data", day);
                    return (
                        <div key={index} className={index === 0 ? "today" : "otherDays"}>
                            <div>{days[date.getDay()]}</div>
                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={"weatherIcon"} />
                            <div>{Math.round(day.temp.max - 273.15)}&#8451;&#160;&#160;&#160;{Math.round(day.temp.min - 273.15)}&#8451;</div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default DailyWeather;
