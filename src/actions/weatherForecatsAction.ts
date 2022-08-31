import { weatherForecast, WeatherForecastReq } from "./../api/API";
import axios from "axios";

export const getWeatherCast = (data: WeatherForecastReq) =>
  axios.get(weatherForecast(data));
