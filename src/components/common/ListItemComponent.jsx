import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import ItemService from '../../services/ItemService';

export default function ListItemComponent(props) {
    const [items, setItems] = useState([]);
    const category = props.category;
    let history = useHistory();

    useEffect(async () => {
        if (category === "active") {
            ItemService.getActiveItems().then(res => {
                setItems(res.data);
            });
        } else if (category === "expired") {
            ItemService.getAllItems().then(res => {
                setItems(res.data);
            });
        } else if (category === "propose") {
            ItemService.getAllItems().then(res => {
                setItems(res.data);
            });
        } else if (category === "all") { // default is list all
            ItemService.getAllItems().then(res => {
                setItems(res.data);
            });
        }
    }, []);

    function viewItem(id) {
        history.push(`/offer/view-item/${id}`);
    }

    function takeItem(id) {
        history.push(`/offer/take-item/${id}`);
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
                                            <button style={{ marginLeft: "10px" }} onClick={() => takeItem(item.id)} className="btn btn-success">Take</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => viewItem(item.id)} className="btn btn-info">View</button>
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