import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ItemService from '../../services/ItemService';

export default function ConfirmPage(props) {
    let { id } = useParams();
    const [item, setItem] = useState([])


    useEffect(() => {
        ItemService.getItemById(id).then(res => {
            setItem(res.data);
        })
    }, []);

    return (
        <div>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> To Confirm </h3>
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
                        <label>Quantity:</label>
                        <div>要购买的数量</div>
                    </div>
                    <div className="row">
                        <label>WareHouse:</label>
                        <div>选择仓库地址</div>
                    </div>
                    <div className="row">
                        <label>Tracking Number:</label>
                        <div>#111111</div>
                        <div>#2222222</div>
                    </div>

                    <button className="btn btn-success" onClick={() => { }}>submit</button>
                </div>
            </div>
        </div>
    );
}