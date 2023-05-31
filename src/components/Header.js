import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from "../context/CartContext"
export const Header = () => {
    const { amount } = useCart()
    return (
        <>
            <Navbar bg="dark" variant='dark' fixed='top' className='bottom_color_navbar shadow'>
                <Container>
                    <Navbar.Brand href="#home">Shopping Application</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link href="#login" className="text-decoration-none">สินค้าในตะกล้า  : {amount}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
