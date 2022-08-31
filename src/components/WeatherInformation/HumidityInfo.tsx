
import React from 'react'

const HumidityInfo = ({ humidity }: {
    humidity: number
}) => {
    return (
        <div>
            <h2>Humidity</h2>
            <div>
                {humidity}%
            </div>
        </div>
    )
}

export default HumidityInfo
