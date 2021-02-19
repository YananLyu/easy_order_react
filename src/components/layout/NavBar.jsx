import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="/">Order Management App</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavDropdown title="Offer" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/offer/_all">All</NavDropdown.Item>
                                        <NavDropdown.Item href="/offer/_active">Active</NavDropdown.Item>
                                        <NavDropdown.Item href="/offer/_proposed">Proposed</NavDropdown.Item>
                                        <NavDropdown.Item href="/offer/_Expired">Expired</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/inbound">Inbound</Nav.Link>
                                    <Nav.Link href="/payment">Payment</Nav.Link>
                                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown> */}
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        )
    }
}
