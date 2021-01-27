import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ListItemComponent from '../ListItemComponent';
import ViewItemComponent from '../ViewItemComponent';
import HomeComponent from '../HomeComponent';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Order Management App</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/items">Offer</Nav.Link>
                                        <Nav.Link href="/view-item/3">Inbound</Nav.Link>
                                        <Nav.Link href="/view-item/2">Payment</Nav.Link>
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
                            <br />
                            <div>
                                <Switch>
                                    <Route exact path="/"> <HomeComponent /> </Route>
                                    <Route exact path="/items"> <ListItemComponent /> </Route>
                                    <Route exact path="/view-item/:id"><ViewItemComponent /></Route>

                                </Switch>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}
