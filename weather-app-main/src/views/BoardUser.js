import { searchLocation } from "../services/WeatherService";
import Alert from "../components/Alert";
import LocationSearch from "../components/LocationSearch";
import LocationTable from "../components/LocationTable";
import WeatherSummary from "../components/WeatherSummary";
import React, { Component } from "react";

class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      warning: "",
      error: "",
      currentLocation: null,
      favoriteLocation: null,
    };
  }

  resetAlerts = () => {
    this.setState({
      warning: "",
      error: "",
    });
  };

  addLocation = (term) => {
    this.resetAlerts();

    const location = searchLocation(term);
    if (!location) {
      this.setState({
        error: `No location found called '${term}'`,
      });
    } else if (
      this.state.locations.find((item) => item.name === location.name)
    ) {
      this.setState({
        warning: `Location '${term}' is already in the list.`,
      });
    } else {
      this.setState(({ locations }) => ({
        locations: [location, ...locations],
      }));
    }
  };

  setCurrentLocation = (location) => {
    this.setState(() => ({
      currentLocation: location,
    }));
  };

  setFavoriteLocation = (location) => {
    this.setState(() => ({
      favoriteLocation:
        this.state.favoriteLocation &&
        this.state.favoriteLocation.id === location.id
          ? null
          : location,
    }));
  };

  render() {
    const { error, warning, locations, currentLocation, favoriteLocation } =
      this.state;
    return (
      <div className="container">
        <LocationSearch onSearch={this.addLocation} />
        <Alert message={error} class="alert-danger" />
        <Alert message={warning} class="alert-warning" />
        <LocationTable
          locations={locations}
          current={currentLocation}
          onSelect={(location) => this.setCurrentLocation(location)}
          favorite={favoriteLocation}
          onSelectFavorite={(location) => this.setFavoriteLocation(location)}
        />
        <WeatherSummary location={favoriteLocation} />
        <WeatherSummary location={currentLocation} />
      </div>
    );
  }
}

export default BoardUser;
