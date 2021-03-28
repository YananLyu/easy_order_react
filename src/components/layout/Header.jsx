import React, {useState, useEffect} from "react";
import {Navbar, Nav} from 'react-bootstrap';
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
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {currentUser ? (
                    <Navbar.Brand href="/home">OMS</Navbar.Brand>

                ) : (
                    <Navbar.Brand href="/welcomehome">OMS</Navbar.Brand>

                )
                }
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                        {currentUser && (
                            <Nav.Link href="/home">Home</Nav.Link>
                        )}
                        {currentUser && (
                            <Nav.Link href="/offers">Offers</Nav.Link>
                        )}
                        {currentUser && (
                            <Nav.Link href="/inbound">Inbound</Nav.Link>
                        )}
                        {currentUser && (
                            <Nav.Link href="/outbound">Outbound</Nav.Link>
                        )}
                        {currentUser && (
                            <Nav.Link href="/payment">Payment</Nav.Link>
                        )}

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
