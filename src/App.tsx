import { useCallback, useState } from 'react';
import './style/index.scss';
import Search from './components/Search';
import { CountriesData } from './types/types';
import WeatherInformation from './components/WeatherInformation';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountriesData | null>(null)

  const handleSelectCountry = useCallback((country: CountriesData) => {
    setSelectedCountry(country)
  }, [])

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <Search handleSelectCountry={handleSelectCountry} />
      <div className="weather-app-info" style={{ position: 'relative' }}>
        {selectedCountry && <WeatherInformation selectedCountry={selectedCountry} />}
      </div>
    </div>
  );
}

export default App;
