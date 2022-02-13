import React from 'react'
import WeatherForecast from "./components/WeatherForecast";
import Cities from "./components/Cities";

function Container() {
    return (
        <div>
            <div style={{ backgroundColor: "#E1FBFF", padding: "20px 0"}}>
                <Cities />
            </div>
            <div style={{ padding: "20px 0"}}>
                <WeatherForecast />
            </div>
        </div>
    )
}

export default Container