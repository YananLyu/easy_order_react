import React from 'react'
import {
    useParams,
} from "react-router-dom";

export default function PaymentPage(props) {
    let { id } = useParams();

    return (
        <div>
            <h1>Payment</h1>
        </div>
    );
}
