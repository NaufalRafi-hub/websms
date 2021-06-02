import React from 'react'
import {Row, Col, Button} from "react-bootstrap"
import "./AboutusComp.css"
import aboutus from "../../images/aboutus.png"
import line from "../../images/line-about.png"

const AboutusComp = () => {
    return (
        <div className="container">
            <Row >
                <Col className="sub-about" md={{ span: 6, offset: 3 }}>
                    <h1>About Us</h1>
                    <img src={aboutus} alt="Kantor" width="510px"/>  
                    <div className="isi">
                        <p>Kami adalah Perusahaan yang terletak di bintaro, Indonesia. CV. Sinar Media Sakti sebuah perusahaan yang dari sejak awal berkomitmen untuk bergerak dalam bidang pelayanan barang dan jasa dengan spesialisasi di bidang cetak. </p>               
                    </div>
                    
                </Col>
            </Row>
            <Row>
                <Col className="sub-about" >
                    <img src={line} alt="garis" className="line-about"/> 
                </Col>
                <Col className="sub-about" >
                    <Button className="btn-about" variant="dark">See Detail</Button>
                </Col>
            </Row>
        
        </div>
    )
}

export default AboutusComp
