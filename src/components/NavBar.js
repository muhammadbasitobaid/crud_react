import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (

        <>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Brand href="#home"><h4>CRUD APP, Pvt. Ltd.</h4></Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default NavBar;