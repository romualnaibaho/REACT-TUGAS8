import React, { Component } from "react";
import { Container, Navbar, Nav, Image, Dropdown, DropdownButton } from "react-bootstrap";

class Navigation extends Component{
    render(){
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{maxHeight: "80px"}}>
                    <Container>
                    <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
                        <Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bahasa Inggris</Dropdown.Item>
                    </DropdownButton>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="#" className="text-center">
                                        <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" alt="Picture" width="40px" roundedCircle/> <br/>
                                        <label>Romual Naibaho</label>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;