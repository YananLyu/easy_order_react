import React from 'react';
import ListOfferComponent from '../components/common/ListOfferComponent';

import {Tab, Tabs} from "react-bootstrap";
import PublishOfferPage from "./OfferSubPages/PublishOfferPage";

export default function OffersPage(props) {
    return (
        <div style={{padding: '0rem  10rem'}}>
            <Tabs defaultActiveKey="offer_active" id="uncontrolled-tab-example">
                <Tab eventKey="offer_active" title="Active">
                    <ListOfferComponent category={"_active"}/>
                </Tab>
                <Tab eventKey="offer_expired" title="Expired">
                    <ListOfferComponent category={"_expired"}/>
                </Tab>
                <Tab eventKey="offer_proposed" title="Proposed">
                    <ListOfferComponent category={"_proposed"}/>
                </Tab>
                <Tab eventKey="offer_publish" title="Publish an Offer">
                    <PublishOfferPage/>
                </Tab>
            </Tabs>
        </div>
    )
}
