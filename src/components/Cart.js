
import { Item } from './Items'
import { useCart } from "../context/CartContext"
import { Container, Row } from 'react-bootstrap'
export const Cart = () => {
    const { products, total, formatMoney } = useCart()

    return (
        <>
            <Container>

                <Row className="justify-content-md-center">
                    <hr />
                    <h1 className='text-center'>
                        {products.length > 0 ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท` : 'ไม่มีสินค้าในตะกร้า'}
                    </h1>
                    <hr />
                    {products.map((data) => {
                        return <Item key={data.id} {...data} />
                    })}
                </Row>
            </Container>
        </>
    )
}
