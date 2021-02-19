import React, { Component } from 'react';
// import ItemService from '../../services/ItemService';
// import OfferHeaderComponent from './OfferHeaderComponent';

class ListItemComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.viewItem = this.viewItem.bind(this);
        this.takeItem = this.viewItem.bind(this);
        // this.getActiveItems = this.getActiveItems.bind(this);
    }

    viewItem(id) {
        console.log(this.props);

        this.props.history.push(`/view-item/${id}`);
    }

    takeItem(id) {
        this.props.history.push(`/take-item/${id}`);
    }


    componentDidMount() {
        // ItemService.getItems().then(res => {
        //     this.setState({ items: res.data });
        // });
        console.log(this.state.props);

        // if (this.state.id === "active") {
        //     ItemService.getActiveItems().then(res => {
        //         this.setState({ items: res.data });
        //     });
        // } else {
        //     ItemService.getItems().then(res => {
        //         this.setState({ items: res.data });
        //     });
        // }
    }

    render() {
        return (
            <div>
                <h2 className="text-center">All Products</h2>
                {/* <OfferHeaderComponent /> */}
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
                                this.state.items.map(
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
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.takeItem(item.id)} className="btn btn-success">Take</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewItem(item.id)} className="btn btn-info">View</button>
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
}

export default ListItemComponent;