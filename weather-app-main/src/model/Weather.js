export class Coordinates {
  constructor(lon, lat) {
    this.lon = lon;
    this.lat = lat;
  }
}

export class WeatherLocation {
  constructor(coord, id, name) {
    this.coord = coord;
    this.id = id;
    this.name = name;
  }
}
