import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import ItemService from '../../services/ItemService';

export default function ListPaymentComponent(props) {
    const [items, setItems] = useState([]);
    const category = props.category;
    let history = useHistory();

    useEffect(() => {
        if (category === "unpaid") {
            ItemService.getAllItems().then(res => {
                setItems(res.data);
            });
        } else if (category === "pending") {
            ItemService.getAllItems().then(res => {
                setItems(res.data);
            });
        } else if (category === "history") {
            alert('history')
            ItemService.getAllItems().then(res => {
                setItems(res.data);
            });
        }
    }, []);

    function confirmItem(id) {
        history.push(`/inbound/confirm-item/${id}`);
    }

    function cancelItem(id) {
        history.push(`/inbound/confirm-item/${id}`);
    }

    return (
        <div>

            <div className="row">
                <table className="table table-striped table-bordere">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item Name</th>
                            <th>Item Link</th>
                            <th>Price Seller</th>
                            <th>Price Buyer</th>
                            <th>Quantity Total</th>
                            <th>Quantity Left</th>
                            <th>Available Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(
                                item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.itemName}</td>
                                        <td><a href={item.itemLink}>{item.itemLink}</a></td>
                                        <td>${item.priceSeller}</td>
                                        <td>${item.priceBuyer}</td>
                                        <td>{item.quantityTotal}</td>
                                        <td>{item.quantityLeft}</td>
                                        <td>{item.availableStatus ? "Yes" : "No"}</td>
                                        <td>
                                            <button style={{ marginLeft: "10px" }} onClick={() => confirmItem(item.id)} className="btn btn-success">Confirm</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => cancelItem(item.id)} className="btn btn-info">Cancel</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}