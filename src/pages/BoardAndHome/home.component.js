import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";

/**
 * This is a public page that shows public content. People don’t need to log in to view this page.
 */
const Home = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                <h1>Welcome to Easy Order Management System</h1>
                <p>Please login or sign up to use the awesome app</p>
                <h3>{content}</h3>
            </header>
        </div>
    );
};

export default Home;