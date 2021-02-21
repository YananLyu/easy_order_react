import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";

import ItemService from '../../services/ItemService';

export default function ViewItemPage(props) {
    let { id } = useParams();
    let history = useHistory();
    const [item, setItem] = useState([])

    useEffect(() => {
        ItemService.getItemById(id).then(res => {
            setItem(res.data);
        })
    }, []);

    return (
        <div>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Product Details </h3>
                <div className="card-body">
                    <div className="row">
                        <label>Product Name:</label>
                        <div>{item.itemName}</div>
                    </div>
                    <div className="row">
                        <label className="card-title">Product Link:</label>
                        <div className="card-text">{item.itemLink}</div>
                    </div>
                    <div className="row">
                        <label className="card-title">Price Seller:</label>
                        <div className="card-text">{item.priceSeller}</div>
                    </div>
                    <div className="row">
                        <label>Price Middle Seller:</label>
                        <div>{item.priceMiddleSeller}</div>
                    </div>
                    <div className="row">
                        <label>Price Buyer:</label>
                        <div>{item.priceBuyer}</div>
                    </div>
                    <div className="row">
                        <label>quantity Total:</label>
                        <div>{item.quantityTotal}</div>
                    </div>
                    <div className="row">
                        <label>Quantity Left:</label>
                        <div>{item.quantityLeft}</div>
                    </div>
                    <div className="row">
                        <label>Seller Platform:</label>
                        <div>{item.sellerPlatform}</div>
                    </div>
                    <div className="row">
                        <label>Create Time:</label>
                        <div>{item.createTime}</div>
                    </div>
                    <div className="row">
                        <label>Availabel Status:</label>
                        <div>{item.availableStatus}</div>
                    </div>
                    <button className="btn btn-success" onClick={() => { history.goBack(-1) }}>Back</button>
                </div>
            </div>
        </div>
    );
}