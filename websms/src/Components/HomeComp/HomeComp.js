import React from 'react'
import {Row, Col} from "react-bootstrap"
import img from "../../images/aboutus.png"
import "./HomeComp.css"

const HomeComp = () => {
    return (
        <div className="container-fluid">
            <div className="container" >
                <Row className="justify-content-md-center">
                    
                    <Col className="sub" md={{ span: 6, offset: 5 }}>   
                        <h1>SMS</h1>
                        <h2>"Jasa Cetak dalam Satu Atap"</h2>
                    </Col>  
                </Row>
                {/* <Row className="justify-content-md-center">
                    
                    <Col className="sub2" md={{ span: 5, offset: 6 }}>   
                        <h1>"Jasa Cetak dalam Satu Atap"</h1>
                    </Col>  
                </Row> */}
            </div>
        </div>
    )
}

export default HomeComp
