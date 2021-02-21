import React from 'react';
import ListItemComponent from '../components/common/ListItemComponent';
import OfferHeaderComponent from '../components/common/OfferHeaderComponent';
import {
    useParams,
} from "react-router-dom";

export default function OfferPage(props) {
    let { id } = useParams();

    return (
        <div>
            <OfferHeaderComponent title={id.charAt(0).toUpperCase() + id.slice(1) + ' Products'} />
            <ListItemComponent category={id} />
        </div>
    )
}
