import React, {useEffect, useState} from 'react'
import {Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap';

import HomeService from "../services/HomeService";
import {useHistory} from "react-router-dom";

export default function HomePage(props) {

    const [homeInfo, setHomeInfo] = useState([])
    let history = useHistory();

    useEffect(() => {
        HomeService.getHomeInfo()
            .then(res => {
                setHomeInfo([res.data]);
            })
            .catch(
                () => console.log("Cannot connect to service")
            );

    }, []);

    function publishOffer() {
        history.push(`/admin/offers/publish`);
    }

    return (
        <div style={{padding: '0rem  10rem'}}>
            <CardDeck>
                <Card
                    key={1}
                    border="dark"
                    className="mb-2"
                >
                    <Card.Title> Offer </Card.Title>
                    <Card.Text>
                        请在这里查看offer相关信息
                    </Card.Text>
                    <ListGroup className="list-group-flush"
                               text="primary"
                    >
                        {console.log(homeInfo)}
                        {console.log(homeInfo[0])}
                        <ListGroupItem action><Card.Link
                            href='offers'>{homeInfo.length === 0 ? 0 : homeInfo[0]["numOfActiveOffers"]} Active
                            Offers</Card.Link></ListGroupItem>
                        <ListGroupItem action><Card.Link
                            href='offers/expired'>{homeInfo.length === 0 ? 0 : homeInfo[0]["numOfExpiredOffers"]} Expired
                            Offers</Card.Link></ListGroupItem>
                        <ListGroupItem action><Card.Link
                            href='offers/proposed'>{homeInfo.length === 0 ? 0 : homeInfo[0]["numOfProposedOffers"]} Proposed
                            Offers</Card.Link></ListGroupItem>
                        <ListGroupItem action><Card.Link onClick={() => publishOffer()}>Publish a new Offer</Card.Link></ListGroupItem>
                    </ListGroup>
                </Card>

                <Card
                    key={2}
                    border="info"
                    className="mb-2"
                >
                    <Card.Title
                        text="dark"
                    >Inbound</Card.Title>
                    <Card.Text>
                        已购买的产品在这里查看
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem
                            action><Card.Link>{homeInfo.length === 0 ? 0 : homeInfo[0]["numOfInboundItem"]} Inbound
                            Items</Card.Link></ListGroupItem>
                        <ListGroupItem
                            action><Card.Link>{homeInfo.length === 0 ? 0 : homeInfo[0]["numOfReportedItem"]} reported
                            items</Card.Link></ListGroupItem>
                    </ListGroup>
                </Card>


                <Card
                    key={3}
                    border="secondary"
                    className="mb-2"
                >
                    <Card.Title
                        text="dark"
                    >Outbound</Card.Title>
                    <Card.Text>
                        如果有货物需要从家邮寄到仓库，信息在这里查看
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem
                            action><Card.Link>{homeInfo.length === 0 ? 0 : homeInfo[0]["numOfOutboundShipments"]} outbound
                            shipments</Card.Link></ListGroupItem>
                    </ListGroup>
                </Card>

                <Card
                    key={4}
                    border="warning"
                    className="mb-2"
                >
                    <Card.Title
                        text="dark"
                    >Payments</Card.Title>
                    <Card.Text>
                        这里可以查看返款信息
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem
                            action><Card.Link>{homeInfo.length === 0 ? 0 : homeInfo[0]["numOfPaymentRequests"]} payments
                            requests</Card.Link></ListGroupItem>
                    </ListGroup>
                </Card>
            </CardDeck>
        </div>
    );
}
