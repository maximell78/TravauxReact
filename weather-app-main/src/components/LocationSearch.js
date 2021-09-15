import React, { Component } from "react";

class LocationSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationSearch: "",
    };
  }

  onChangeEvent = (event) => {
    const newLocationSearch = event.target.value;
    this.setState({
      locationSearch: newLocationSearch,
    });
  };

  addLocation = () => {
    this.setState(() => ({
      locationSearch: "",
    }));
    this.props.onSearch(this.state.locationSearch);
  };

  render() {
    const { locationSearch } = this.state;
    this.disableSearch = locationSearch.trim() === "";

    return (
      <div>
        <label>
          Add Location{" "}
          <input
            className="ml-1 mr-1"
            type="text"
            value={locationSearch}
            onChange={(event) => this.onChangeEvent(event)}
          />
        </label>
        <button
          className="btn btn-primary"
          onClick={this.addLocation}
          disabled={this.disableSearch}
        >
          Search
        </button>
      </div>
    );
  }
}

export default LocationSearch;
