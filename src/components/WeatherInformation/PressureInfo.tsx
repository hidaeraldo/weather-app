
import React from 'react'

const PressureInfo = ({ pressure }: {
    pressure: number
}) => {
    return (
        <div>
            <h2>Pressure</h2>
            <div>
                {pressure}hPa
            </div>
        </div>
    )
}
export default PressureInfo