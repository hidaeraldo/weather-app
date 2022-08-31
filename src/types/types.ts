export type WeatherData = {
  deg: number;
  feels_like: BaseTemp;
  humidity: number;
  pressure: number;
  speed: number;
  sunrise: number;
  sunset: number;
  temp: SpecificTemp;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  // main: {
};

export type CountriesData = {
  name: {
    common: string;
    official: string;
  };
  latlng: number[];
  capital: string[];
};

export interface BaseTemp {
  day: number;
  eve: number;
  morn: number;
  night: number;
}
export interface SpecificTemp extends BaseTemp {
  max: number;
  min: number;
}
