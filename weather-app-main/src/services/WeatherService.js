//import { WeatherLocation } from "../model/Weather";

const cities = [
  {
    id: 1,
    name: "Paris",
  },
  {
    id: 2,
    name: "Londres",
  },
  {
    id: 3,
    name: "New york",
  },
  {
    id: 4,
    name: "Belfast",
  },
  {
    id: 5,
    name: "Montreal",
  },
  {
    id: 6,
    name: "Toronto",
  },
  {
    id: 7,
    name: "Vancouver",
  },
  {
    id: 8,
    name: "San Francisco",
  },
  {
    id: 9,
    name: "Rome",
  },
  {
    id: 10,
    name: "Sydney",
  },
];

const weather = {
  coord: {
    lon: 2.3488,
    lat: 48.8534,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 17.52,
    feels_like: 16.89,
    temp_min: 14.03,
    temp_max: 19.52,
    pressure: 1017,
    humidity: 60,
  },
  visibility: 10000,
  wind: {
    speed: 2.06,
    deg: 280,
  },
  clouds: {
    all: 0,
  },
  dt: 1625691510,
  sys: {
    type: 2,
    id: 2012208,
    country: "FR",
    sunrise: 1625630130,
    sunset: 1625687710,
  },
  timezone: 7200,
  id: 2988507,
  name: "Paris",
  cod: 200,
};

export function searchLocation(term) {
  return cities.find((item) => item.name === term);
}

export function readWeather(locationId) {
  return weather;
}

export function getIconUrl(code) {
  return `http://openweathermap.org/img/wn/${code}.png`;
}
