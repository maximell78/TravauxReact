import React, { Component } from "react";
import WeatherEntry from "./WeatherEntry";
import { readWeather } from "../services/WeatherService";

class WeatherSummary extends Component {
  constructor(props) {
    super(props);
    this.test = null;
    this.state = {
      weather: null,
    };
  }

  getWeather = () => {
    const { location } = this.props;
    if (location && !this.test) {
      this.test = readWeather(location.id);
      this.setState({ weather: this.test });
    }
  };

  componentDidUpdate() {
    this.getWeather();
  }

  render() {
    const { location } = this.props;
    const { weather } = this.state;

    if (!location || !weather) return null;

    return (
      <div>
        <hr />
        <h2>{location.name}</h2>
        <WeatherEntry weather={weather} />
      </div>
    );
  }
}

export default WeatherSummary;
