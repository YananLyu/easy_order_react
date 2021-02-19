import React, { useState, useEffect } from 'react'
import ItemService from '../services/ItemService';
import ListItemComponent from '../components/common/ListItemComponent';
import OfferHeaderComponent from '../components/common/OfferHeaderComponent';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    useParams,
} from "react-router-dom";

// export default class OfferComponent extends Component {
export default function OfferPage() {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         // id: this.props.key,
    //         id: useParams(),
    //         // id: this.props.match.params.id,
    //         // id: this.props.computeMatch.params.id,
    //         items: []
    //     }
    // }


    // componentDidMount() {
    //     if (this.state.id === "_active") {
    //         ItemService.getActiveItems().then(res => {
    //             this.setState({ items: res.data });
    //         })
    //     } else if (this.state.id === "_expired") {
    //         return
    //     } else if (this.state.id === "_propose") {
    //         return
    //     } else if (this.state.id === "_all") { // default is list all
    //         ItemService.getItems().then(res => {
    //             this.setState({ items: res.data });
    //             alert("hi");
    //         });
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             {/* <OfferHeaderComponent /> */}
    //             <ListItemComponent items={this.state.items} />
    //         </div>
    //     )
    // }

    const [items, setItems] = useState(0);
    let { id } = useParams();
    useEffect(() => {
        if (id === "_active") {
            ItemService.getActiveItems().then(res => {
                setItems(res.data);
            });
            alert("active");

        } else if (id === "_expired") {
            return
        } else if (id === "_propose") {
            return
        } else if (id === "_all") { // default is list all
            // ItemService.getItems().then(res => {
            //     this.setState({ items: res.data });
            //     alert("hi");
            // });
            alert("all");

        }
        // return () => {
        //     cleanup
        // }
    }, [id])
    return (
        <div>
            {/* <OfferHeaderComponent /> */}
            <ListItemComponent data={items} />
        </div>
    )
}
