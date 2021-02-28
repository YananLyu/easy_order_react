import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import AuthService from "../../services/auth.service";

export default function Header() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
        // <div>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {currentUser ? (
                    <Navbar.Brand href="/home">OMS</Navbar.Brand>

                ) : (
                        <Navbar.Brand href="/welcomehome">OMS</Navbar.Brand>

                    )
                }
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                        {currentUser && (
                            <Nav.Link href="/home">Home</Nav.Link>
                        )}

                        {currentUser && (
                            <Nav>
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
                            </Nav>)}

                        {showModeratorBoard && (
                            <Nav.Link href="/mod">Moderator Board</Nav.Link>
                        )}

                        {showAdminBoard && (
                            <Nav.Link href="/admin">Admin Board</Nav.Link>
                        )}

                        {currentUser && (
                            <Nav.Link href="/user">User</Nav.Link>
                        )}
                    </Nav>
                    <Nav>
                        {currentUser ? (
                            <Nav>
                                <Nav.Link href="/profile">
                                    {currentUser.username}
                                </Nav.Link>
                                <Nav.Link href="/login" onClick={logOut}>
                                    Logout
                                        </Nav.Link>
                            </Nav>
                        ) : (
                                <Nav>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Sign Up</Nav.Link>
                                </Nav>
                            )
                        }
                    </Nav>
                    {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                    {/* <Nav className="ml-auto">
                                <Nav.Link href="/">Login</Nav.Link>
                            </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
