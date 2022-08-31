
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getWeatherCast } from '../../actions/weatherForecatsAction'
import { CountriesData, WeatherData } from '../../types/types'
import Spinner from '../Spinner/Spinner'
import HumidityInfo from './HumidityInfo'
import PressureInfo from './PressureInfo'
import TemperatureInfo from './TemperatureInfo'
import WindInfo from './WindInfo'

const WeatherInformation = ({ selectedCountry }: { selectedCountry: CountriesData }) => {

    const [cityInformation, setCityInformation] = useState<WeatherData[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const handleFetchWeatherData = useCallback(
        () => {
            const { latlng } = selectedCountry
            setIsLoading(true)
            getWeatherCast({
                lat: latlng[0],
                lon: latlng[1]
            }).then(({ data }) => {
                setCityInformation(data?.list)
                setIsLoading(false)

            })

        },
        [selectedCountry],
    )
    useEffect(() => {
        handleFetchWeatherData()
    }, [handleFetchWeatherData])

    if (isLoading && !cityInformation) {
        return <Spinner />
    }
    return (
        <div className='mt-5'>
            {cityInformation &&
                <>

                    <Row>
                        <Col lg={3}>
                            <div className='weather-info-card'>
                                <TemperatureInfo tempInfo={cityInformation[0].temp} feelsLike={cityInformation[0].feels_like} />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='weather-info-card'>
                                <WindInfo windSpeed={cityInformation[0].speed} />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='weather-info-card'>
                                <PressureInfo pressure={cityInformation[0].pressure} />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='weather-info-card'>
                                <HumidityInfo humidity={cityInformation[0].humidity} />
                            </div>
                        </Col>
                    </Row>
                </>
            }
        </div>
    )
}
export default WeatherInformation