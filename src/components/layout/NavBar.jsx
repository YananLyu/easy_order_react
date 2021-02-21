import React, { Component } from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


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
                                        <NavDropdown.Item href="/offer/all">All</NavDropdown.Item>
                                        <NavDropdown.Item href="/offer/active">Active</NavDropdown.Item>
                                        <NavDropdown.Item href="/offer/proposed">Proposed</NavDropdown.Item>
                                        <NavDropdown.Item href="/offer/expired">Expired</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Inbound" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/inbound/confirm">To Confirm</NavDropdown.Item>
                                        <NavDropdown.Item href="/inbound/history">history</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Payment" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/payment/request">Payment Request</NavDropdown.Item>
                                        <NavDropdown.Item href="/payment/unpaid">Unpaid Orders</NavDropdown.Item>
                                        <NavDropdown.Item href="/payment/pending">Pending transaction</NavDropdown.Item>
                                        <NavDropdown.Item href="/payment/history">Payment History</NavDropdown.Item>
                                    </NavDropdown>
                                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown> */}
                                </Nav>
                                {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                                <Nav className="ml-auto">
                                    <Nav.Link href="/">Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        )
    }
}
