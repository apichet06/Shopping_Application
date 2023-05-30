import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <>
                <Navbar bg="dark" variant='dark' fixed='top' className='bottom_color_navbar shadow'>
                    <Container>
                        <Navbar.Brand href="#home">Shopping Application</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <Link href="#login" className="text-decoration-none">จำนวนสินค้า : 0</Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </>
    )
}
