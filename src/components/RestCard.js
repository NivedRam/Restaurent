import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function RestCard({data}) {
    console.log(data);
  return (
    <Col sm={12} lg={4} xl={3} >
   <Link style={{textDecoration:"none"}} to={`/View-restaurent/${data.id}`}>
     
           <Container>
        <Card className='mt-4 text-center' style={{ width: '100%',display:'flex',alignItems:'stretch',justifyContent:'space-between' }}>
       <Card.Img variant="top" src={data.photograph} />
       <Card.Body>
         <Card.Title>{data.name}</Card.Title>
         <Card.Text>
          {data.address}
         </Card.Text>
      
       </Card.Body>
     </Card>
     </Container>
    
    
   </Link>
   </Col>
  )
}

export default RestCard
