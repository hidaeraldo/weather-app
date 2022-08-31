
import React from 'react'

const WindInfo = ({ windSpeed }: {
    windSpeed: number
}) => {
    return (
        <div>
            <h2>Wind</h2>
            <div>
                <span>Speed</span> {windSpeed}m/s
            </div>
        </div>
    )
}
export default WindInfo