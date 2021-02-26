import React, { Component } from "react";

import UserService from "../../services/user.service";


/**
 * Role-based Pages
 * We’re gonna have 3 pages for accessing protected data:

 * BoardUser page calls UserService.getUserBoard()
 * BoardModerator page calls UserService.getModeratorBoard()
 * BoardAdmin page calls UserService.getAdminBoard()
 */
export default class BoardUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getUserBoard().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>{this.state.content}</h3>
                </header>
            </div>
        );
    }
}