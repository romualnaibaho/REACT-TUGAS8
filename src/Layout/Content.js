import React, { Component } from "react";
import { Row, Col, ListGroup, Jumbotron, Form, Image, Button, Modal } from "react-bootstrap";

class Navigation extends Component{

    constructor(){
        super();
        this.state = {
            show: false
        };
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {

        this.setState({show: false});
    }

    handleShow(e) {
        e.preventDefault();
        this.setState({show: true});
    }

    render(){
        return (
            <div>
                <Row className="justify-content-center mt-5">
                    <Col md={3}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                                Liga 1 Indonesia
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Liga Premier Inggris
                            </ListGroup.Item>
                            <ListGroup.Item as="li" disabled>
                                Divisi Primera
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Seri A
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Ligue 1
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                Bundes Liga
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={6}>
                        <Jumbotron>
                            <h1>Divisi Primera</h1>
                            <p>Main untuk Catalunya, Gerard Pique Minta Dihormati</p>
                            <button className="btn btn-primary">Read More</button>
                        </Jumbotron>
                    </Col>
                    <Col md={3}>
                        <div className="text-center mb-3">
                            <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" alt="Picture" width="60px" roundedCircle/>
                            <h4>Silahkan Login</h4>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" placeholder="Masukkan Email"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Term & Condition" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleShow}>
                                Login
                            </Button>
                        </Form>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Anda Berhasil Login!</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Username & Password
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Navigation;