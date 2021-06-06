import React from 'react'
import {Col, Row, Button} from "react-bootstrap"
import "./ServicesComp.css"

const ServicesComp = () => {
    return (
        <div className="container sub-services">
            <div className="judul row justify-content-start">
                <h1>Services</h1>
            </div>
            <div className="content">
                {/* row pertama */}
                <Row>
                    <Col>
                        <h1>
                            Display
                        </h1>
                    </Col>
                    <Col>
                        <h1>
                            Sign
                        </h1>
                    </Col>
                    <Col>
                        <h1>
                            Booth
                        </h1>
                    </Col>
                    <Col>
                        <h1>
                            Branding
                        </h1>
                    </Col>
                </Row>
                {/* row KEDUA */}
                <Row>
                    <Col>
                        <h2>
                            Kami menyediakan display untuk advertisement
                        </h2>
                        
                    </Col>
                    <Col>
                        <h2>
                            Bentuk Sign sebagai pengenal logo dalam perusahaan anda
                        </h2>
                        
                    </Col>
                    <Col>
                        <h2>
                            Booth/Stand kami sediakan berbagai jenis, cocok untuk acara dalam mall
                        </h2>
                        
                    </Col>
                    <Col>
                        <h2>
                            Kami membuat branding anda menjadi kuat dan tersampaikan kedalam masyarakat
                        </h2>
                        
                    </Col>
                </Row>
                {/* row ketiga */}
                <Row>
                    <Col>
                        <hr></hr>
                        
                    </Col>
                    <Col>
                        <hr></hr>
                    </Col>
                    <Col>
                        <hr></hr>
                    </Col>
                    <Col>
                        <hr></hr>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

export default ServicesComp
