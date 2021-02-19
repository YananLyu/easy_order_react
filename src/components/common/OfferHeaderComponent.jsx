import React, { Component } from 'react'

export default class OfferHeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.getActiveItems = this.getActiveItems.bind(this);
        this.getProposedItems = this.getProposedItems.bind(this);
        this.getExpiredItems = this.getExpiredItems.bind(this);
    }

    getActiveItems() {
        // this.props.history.push("/offer/_active");
        this.context.history.push("/offer/_active");
    }
    getProposedItems() {
        this.props.history.push("/items/proposed");
    }
    getExpiredItems() {
        this.props.history.push("/items/expired");
    }

    render() {
        return (
            <div>
                <div className="row container">
                    <button className="btn btn-success" onClick={this.getActiveItems}> Active </button>
                    <button className="btn btn-info" onClick={this.getProposedItems}> Proposed </button>
                    <button className="btn btn-danger" onClick={this.getExpiredItems}> Expired </button>
                </div>
            </div>
        )
    }
}
