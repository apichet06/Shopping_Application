
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import { useCart } from '../context/CartContext'
export const Item = (props) => {
    const { id, image, name, price, quantity } = props;
    const { formatMoney, removeItem, addQuantity, subtractQauntity } = useCart();
    return (
        <>
            <Col md={11} className="mb-1">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3}>
                                <img src={image} alt={id} height={100} />
                            </Col>
                            <Col md={3} className="d-flex align-items-center">
                                {name}
                            </Col>
                            <Col md={2} className="d-flex align-items-center">
                                {formatMoney(price)}
                            </Col>
                            <Col md={2} className="d-flex align-items-center">
                                <Row className="justify-content-center">
                                    <Col md={3} className="d-flex justify-content-center align-items-center">
                                        <Button variant="secondary" size="sm" onClick={() => subtractQauntity(id)}>-</Button>
                                    </Col>
                                    <Col md={5} className="d-flex align-items-center">
                                        <Form.Control type="text" value={quantity} className="text-center" size="sm" required disabled />
                                    </Col>
                                    <Col md={3} className="d-flex justify-content-center align-items-center">
                                        <Button variant="secondary" size="sm" onClick={() => addQuantity(id)}>+</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1} className="justify-content-end d-flex align-items-center">
                                {formatMoney(quantity * price)}
                            </Col>
                            <Col md={1} className="d-flex justify-content-center align-items-center">
                                <Button variant="danger" size="sm" onClick={() => removeItem(id)}>ลบ</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>

    )
}
