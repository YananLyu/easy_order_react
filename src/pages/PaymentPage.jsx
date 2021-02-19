import React, { Component } from 'react'
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

import ItemService from '../services/ItemService';

export default class PaymentPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: {}
        }


    }

    componentDidMount() {
        ItemService.getItems().then(res => {
            this.setState({ items: res.data });
        });

    }

    render() {
        return (
            <div>
                <h1>Payment</h1>
            </div>
        );
    }
}
