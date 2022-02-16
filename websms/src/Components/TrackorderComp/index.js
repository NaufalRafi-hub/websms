import React from 'react'
import {Col, Row, Button} from "react-bootstrap"
import "./TrackComp.css"
import {SearchIcon} from "./TrackComp"


const TrackorderComp = () => {
    return (
        <div className="container track">
            <Row>
                <Col>
                    <div className="judul-track">
                        <h1>
                            Lacak Pesanan
                        </h1>
                    </div>
                </Col>
            </Row>
            <div className="content-track">
                <Row>
                    <Col>
                        <div className="sub-content-track">
                            <h2>
                                Lacak Pesanan Anda!
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="track-icon">
                            <SearchIcon />
                        </div>
                    </Col>
                </Row>
                
            </div>
            

        </div>
    )
}

export default TrackorderComp
