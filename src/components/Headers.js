import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Headers() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src='https://i.postimg.cc/3JR3JYSX/Download-Fork-and-spoon-logo-restaurant-vector-for-free.jpg'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          PEPPER EATS
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers
