import React, { Component } from "react";
import { getIconUrl } from "../services/WeatherService";

class WeatherEntry extends Component {
  convertUnixTimeToDate = (unixUtc) => {
    return new Date(unixUtc * 1000);
  };

  render() {
    const { weather } = this.props;
    return (
      <div>
        <div>{this.convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
        <div>
          <strong>{weather.main.temp}°C</strong>
          <div>
            ({weather.main.temp_min}°C / {weather.main.temp_max}°C)
          </div>
        </div>
        <div>Humidity: {weather.main.humidity}%</div>
        {weather.weather.map((condition) => (
          <div key={condition.id}>
            <img src={getIconUrl(condition.icon)} alt={condition.main} />{" "}
            {condition.main} {condition.description}
          </div>
        ))}
      </div>
    );
  }
}

export default WeatherEntry;
