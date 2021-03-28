import {Button, Form, InputGroup} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import OfferService from "../../services/OfferService";


export default function PublishOfferPage(props) {
    let history = useHistory();
    const [offer, setOffer] = useState({});

    const inputHandler = (e) => {
        e.preventDefault();
        setOffer({
            ...offer,
            [e.target.name] : e.target.value
        });
    }
    const postOffer = (event) => {
        event.preventDefault();
        OfferService.publishOffer(offer).then(() => console.log("publish successfully a new offer"));
        // history.push("/home");
    }
    return (
        <div style={{ padding: '0rem  10rem' }}>
            <Form onSubmit={(e) => postOffer(e)}>
                <Form.Group controlId="formBasicPlatform">
                    <Form.Label>销售平台</Form.Label>
                    <Form.Control
                        type="text"
                        name="platformSeller"
                        onChange={(e) => inputHandler(e)}
                        placeholder="Enter platform name"/>
                </Form.Group>

                <Form.Group controlId="formProductName">
                    <Form.Label>产品名称</Form.Label>
                    <Form.Control
                        type="text"
                        name = 'productName'
                        onChange={(e) => inputHandler(e)}
                        placeholder="Enter Product name"/>
                </Form.Group>

                <Form.Group controlId="formProductLink">
                    <Form.Label>购买链接</Form.Label>
                    <Form.Control
                        type="text"
                        name = 'productLink'
                        onChange={(e) => inputHandler(e)}
                        placeholder="Enter Product Link"/>
                </Form.Group>

                <Form.Group controlId="formProductUnitPrice">
                    <Form.Label>产品购买价格</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="number"
                            name = 'unitPrice'
                            step="any"
                            onChange={(e) => inputHandler(e)}
                            placeholder="Enter Product unit price"/>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formProductAdminPrice">
                    <Form.Label>神医回收价格</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="number"
                            name = 'adminPrice'
                            step="any"
                            onChange={(e) => inputHandler(e)}
                            placeholder="Enter Product Admin price"/>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formProductModPrice">
                    <Form.Label>Moderator回收价格</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="number"
                            name = 'modPrice'
                            step="any"
                            onChange={(e) => inputHandler(e)}
                            placeholder="Enter Product Mod price"/>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formProductQTY">
                    <Form.Label>数量</Form.Label>
                    <Form.Control
                        type="number"
                        name='quantity'
                        onChange={(e) => inputHandler(e)}
                        placeholder="Enter QTY"/>
                </Form.Group>

                <Form.Group controlId="formProductArea">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                        as="textarea" rows={5}
                        type="text"
                        name='offerNote'
                        onChange={(e) => inputHandler(e)}
                        placeholder="Write some notes"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>);
}