const API_KEY = "d94bcd435b62a031771c35633f9f310a";
const WeatherURL = "https://api.openweathermap.org/data/2.5/forecast/daily";
export const CountriesURL = "https://restcountries.com/v3.1/all";

// export const coordinates = (location) => `${URL}weather?q=${location}&appid=${API_KEY}`

export interface WeatherForecastReq {
  lat: number;
  lon: number;
}

export const weatherForecast = ({ lat, lon }: WeatherForecastReq) =>
  `${WeatherURL}?lat=${lat}&lon=${lon}&units=metric&cnt=1&appid=${API_KEY}`;

// export const CountriesListURl = () => CountriesURL;
