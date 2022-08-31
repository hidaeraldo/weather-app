
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { BaseTemp, SpecificTemp } from '../../types/types'

const TemperatureInfo = ({ tempInfo, feelsLike }: {
    tempInfo: SpecificTemp,
    feelsLike: BaseTemp
}) => {
    return (
        <div>
            <h2>Temperature</h2>
            <div>
                <Row>
                    <Col>
                        <div className="">
                            <span>min</span> {tempInfo.min}°C
                        </div>
                    </Col>
                    <Col>
                        <div className="">
                            <span>max</span> {tempInfo.max}°C
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Feels like </h3>
                        <Row>
                            <Col>
                                <div>
                                    <span>Day</span> {feelsLike.day}°C
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <span>Night</span> {feelsLike.night}°C
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default TemperatureInfo