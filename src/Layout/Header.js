import React, { Component } from "react";
import { Container, Row, Col, Breadcrumb, Carousel } from "react-bootstrap";

class Navigation extends Component{
    render(){
        return (
            <div>
                <Row className="justify-content-end">
                    <Col md={4}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Container>
                        <Carousel fade>
                            <Carousel.Item style={{height: "500px"}}>
                                <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" alt="First slide"/>
                                <Carousel.Caption>
                                <h3>Inggris Mau Menjadi Tim Terbaik di Dunia 1</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{height: "500px"}}>
                                <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" alt="First slide"/>
                                <Carousel.Caption>
                                <h3>Inggris Mau Menjadi Tim Terbaik di Dunia 2</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{height: "500px"}}>
                                <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" alt="First slide"/>
                                <Carousel.Caption>
                                <h3>Inggris Mau Menjadi Tim Terbaik di Dunia 3</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </Row>
            </div>
        );
    }
}

export default Navigation;