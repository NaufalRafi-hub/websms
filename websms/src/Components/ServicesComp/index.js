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
                <Row className="sub-judul">
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
                            Installation
                        </h1>
                    </Col>
                </Row>
                {/* row KEDUA */}
                <div className="isi-services">
                    <Row>
                        <Col>
                            <h2>
                                Display produk yang akan meningkatkan minat beli konsumen dalam pembelian barang yang terpajang.
                            </h2>
                            
                        </Col>
                        <Col>
                            <h2>
                                Sign sebagai pemerjelas logo dan informasi dari brand sesuai dengan kebutuhan perusahaan.
                            </h2>
                            
                        </Col>
                        <Col>
                            <h2>
                                Variasi booth dan stand sesuai dengan kebutuhan brand untuk penjualan produk dan penyampaian informasi
                            </h2>
                            
                        </Col>
                        <Col>
                            <h2>
                                Berbagai bentuk instalasi sebagai unique attraction terhadap produk dan brand.
                            </h2>
                            
                        </Col>
                    </Row>
                </div>
                {/* row ketiga */}
                <div className="hr-below">
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
                    <Row>
                        <Col>
                            <h3>Table Display</h3>
                        </Col>
                        <Col>
                            <h3>Neon Box</h3>
                        </Col>
                        <Col>
                            <h3>Photobooth</h3>
                        </Col>
                        <Col>
                            <h3>Packaging</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Floor Display</h3>
                        </Col>
                        <Col>
                            <h3>Billboard</h3>
                        </Col>
                        <Col>
                            <h3>Stage</h3>
                        </Col>
                        <Col>
                            <h3>Pillar Branding</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Wall Display</h3>
                        </Col>
                        <Col>
                            <h3>Floor Sign</h3>
                        </Col>
                        <Col>
                            <h3>Booth Camp</h3>
                        </Col>
                        <Col>
                            <h3>Truck Sticker</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Backwall</h3>
                        </Col>
                        <Col>
                            <h3></h3>
                        </Col>
                        <Col>
                            <h3>Backdrop</h3>
                        </Col>
                        <Col>
                            <h3>Standee Acrylic</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Bar Top</h3>
                        </Col>
                        <Col>
                            <h3></h3>
                        </Col>
                        <Col>
                            <h3>DJ Table</h3>
                        </Col>
                        <Col>
                            <h3>Totem </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Shelftalker</h3>
                        </Col>
                        <Col>
                            <h3></h3>
                        </Col>
                        <Col>
                            <h3></h3>
                        </Col>
                        <Col>
                            <h3></h3>
                        </Col>
                    </Row>
                </div>
            </div>
            
        </div>
    )
}

export default ServicesComp
