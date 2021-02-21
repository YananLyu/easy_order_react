import React from 'react'
import {
    useParams,
} from "react-router-dom";
import ListPaymentComponent from '../components/common/ListPaymentComponent';

export default function PaymentPage(props) {
    let { id } = useParams();

    return (
        <div>
            <h1>Payment</h1>
            <ListPaymentComponent category={id} />
        </div>
    );
}
