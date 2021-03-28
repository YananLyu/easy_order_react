import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import OfferService from "../../services/OfferService";

export default function ListOfferComponent(props) {
    const [items, setItems] = useState([]);
    const category = props.category;
    let history = useHistory();

    useEffect(() => {
        if (category === "_active") {
            OfferService.getActiveOffers().then(res => {
                setItems(res.data);
            });
        } else if (category === "_expired") {
            OfferService.getExpiredOffers().then(res => {
                setItems(res.data);
            });
        } else if (category === "_propose") {
            // TODO: 完善这个功能
            OfferService.proposeExpiredOffer({}).then(res => {
                setItems(res.data);
            });
        }
    }, [category]);

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
                        <th>#</th>
                        <th>Platform</th>
                        <th>Product Name</th>
                        <th>Product Link</th>
                        <th>Unit Price</th>
                        <th>Admin Price</th>
                        <th>Qty Left</th>
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
                                    <td>{item.platformSeller}</td>
                                    <td>{item.productName}</td>
                                    <td><a href={item.productLink}>{item.productLink}</a></td>
                                    <td>${item.unitPrice}</td>
                                    <td>${item.adminPrice}</td>
                                    <td>{item.quantityLeft}</td>
                                    <td>{item.availableStatus}</td>
                                    <td>
                                        <button style={{marginLeft: "10px"}} onClick={() => takeItem(item.id)}
                                                className="btn btn-success">Take
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => viewItem(item.id)}
                                                className="btn btn-info">View
                                        </button>
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