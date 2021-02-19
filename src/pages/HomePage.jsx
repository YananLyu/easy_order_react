import React, { Component } from 'react'
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

import ItemService from '../services/ItemService';

export default class HomePage extends Component {
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
                <CardDeck>
                    <Card
                        bg='secondary'
                        key={1}
                        text="light"
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Offer</Card.Header>
                        <Card.Body>
                            <Card.Title> Offer </Card.Title>
                            <Card.Text>
                                Information About Offer
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush" variant="flush strip">
                            <ListGroupItem action variant="secondary">4 Active Offers</ListGroupItem>
                            <ListGroupItem action variant="secondary">10 Expired Offers</ListGroupItem>
                            <ListGroupItem action variant="secondary">0 Proposed Offers</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card
                        bg='info'
                        key={1}
                        text="light"
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Inbound</Card.Header>
                        <Card.Body>
                            <Card.Title> Inbound </Card.Title>
                            <Card.Text>
                                Information about Inbound.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush" variant="flush">
                            <ListGroupItem action variant="info">10 Inbound Items</ListGroupItem>
                            <ListGroupItem action variant="info">History</ListGroupItem>
                            <ListGroupItem action variant="info">Null</ListGroupItem>
                        </ListGroup>

                    </Card>
                    <Card
                        bg='dark'
                        key={1}
                        text="light"
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >

                        <Card.Header>Payment</Card.Header>
                        <Card.Body>
                            <Card.Title> Payment </Card.Title>
                            <Card.Text>
                                Information About Payments.
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list-group-flush" variant="flush">
                            <ListGroupItem action variant="dark">2 Payment Request</ListGroupItem>
                            <ListGroupItem action variant="dark">Pending Transaction</ListGroupItem>
                            <ListGroupItem action variant="dark">Payment History</ListGroupItem>
                        </ListGroup>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}
