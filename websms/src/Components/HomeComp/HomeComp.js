import React from 'react'
import {Row, Col} from "react-bootstrap"
import aset1 from "../../images/aset1.png"
import "./HomeComp.css";

const HomeComp = () => {
    return (
        <div className="container">
            <Row className="justify-content-md-center">
                <Col>
                    <img src={aset1} alt="aset1" width="900"/>
                </Col>
                <Col className="sub">   
                    <h1>SMS</h1>
                </Col>  
            </Row>
        </div>
    )
}

export default HomeComp
