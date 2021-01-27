import React, { Component } from 'react';
import ItemService from '../services/ItemService';

class ViewItemComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            item: {}
        }
    }

    componentDidMount() {
        ItemService.getItemById(this.state.id).then(res => {
            this.setState({item: res.data});
        })
    }
    
    
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Item Details </h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Item Name:</label>
                            <div>{this.state.item.itemName}</div>
                        </div>
                        <div className="row">
                            <label className="card-title">Item Link</label>
                            <div className="card-text">{this.state.item.itemLink}</div>
                        </div>
                        <div className="row">
                            <label className="card-title">Price Seller</label>
                            <div className="card-text">{this.state.item.priceSeller}</div>
                        </div>
                        <div className="row">
                            <label>Price Middle Seller</label>
                            <div>{this.state.item.priceMiddleSeller}</div>
                        </div>
                        <div className="row">
                            <label>Price Buyer</label>
                            <div>{this.state.item.priceBuyer}</div>
                        </div>
                        <div className="row">
                            <label>quantity Total</label>
                            <div>{this.state.item.quantityTotal}</div>
                        </div>
                        <div className="row">
                            <label>Quantity Left</label>
                            <div>{this.state.item.quantityLeft}</div>
                        </div>
                        <div className="row">
                            <label>Seller Platform</label>
                            <div>{this.state.item.sellerPlatform}</div>
                        </div>
                        <div className="row">
                            <label>Create Time</label>
                            <div>{this.state.item.createTime}</div>
                        </div>
                        <div className="row">
                            <label>Availabel Status</label>
                            <div>{this.state.item.availableStatus}</div>
                        </div>
                        <button className="btn btn-success" onClick={()=>{}}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewItemComponent;