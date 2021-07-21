import React from 'react'
import {Row, Col, Button} from "react-bootstrap"
import "./AboutusComp.css"
import aboutus from "../../images/aboutus.png"
import line from "../../images/line-about.png"
import { Link } from 'react-router-dom'


const AboutusComp = () => {
    return (
        <div className="container">
            <Row className="justify-content-md-center">
                <Col className="sub-about" >
                    <h1>About Us</h1>
                    <div className="img-about">
                        <img src={aboutus} alt="Kantor" className="img-about2" width="400"/>  
                    </div>
                    <div className="isi" >
                        <p>Kami adalah Perusahaan yang terletak di bintaro, Indonesia. CV. Sinar Media Sakti sebuah perusahaan yang dari sejak awal berkomitmen untuk bergerak dalam bidang pelayanan barang dan jasa dengan spesialisasi di bidang cetak. </p>               
                    </div>
                    
                </Col>
            </Row>
            <Row >
                <div className="row-line">
                    <div className="line-about" >
                    </div>
                    <div className="div-btn">
                        <Link to="/aboutus" className="btn-about" variant="dark">See Detail</Link>
                    </div>
                </div>  
            </Row>
        
        </div>
    )
}

export default AboutusComp
