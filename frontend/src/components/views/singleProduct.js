import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FiShoppingCart,FiHeart } from "react-icons/fi";
import { QuantityPicker } from 'react-qty-picker';


const SingleProduct = () => {
  return (
    <div style={{background:'#eff0f5'}}>
      <br></br>
        <Container >
       <Card style={{borderBlockStyle:'groove'}}>
      <Row >
        <Col>
        <img src="images/img3.jpg" style={{marginTop:'50px',width:'250px' ,he
    :'100px'}} alt="logo" />
        </Col>
        <Col xs={5}>
        <Card style={{borderRadius:0}} >
      <Card.Header> <div style={{fontWeight:'bold'}}>Natural Factors, CranRich, Super Strength, Cranberry Concentrate, 500 mg, 90 Capsules</div>
      <div>by [seller name]</div>
      <div>rating</div>


      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Price and description
          <div>Price</div>
          <div>Availability</div>
        </ListGroup.Item>
        <ListGroup.Item><Row><QuantityPicker smooth /></Row></ListGroup.Item>
        <ListGroup.Item>
        <div className="mb-2">
        <Button  size="lg" style={{marginL
        :'20px' ,background:'#3399a3',border:'#3399a3',width:'180px',borderRadius:'0'}}>
          Buy Now
        </Button>{' '}
        <Button size="lg" style={{marginLeft:'20px' ,background:'#fbbc05',border:'#fbbc05',width:'180px',borderRadius:0}}>
          Add to Cart
        </Button>
      </div>

        </ListGroup.Item>
       
      </ListGroup>
    </Card>
        </Col>
        <Col></Col>
      </Row>
      </Card>
      <br></br>

      <Card >
   
      <ListGroup variant="flush">
      <ListGroup.Item>Price and description lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
          <div>Price</div>
          <div>Availability</div>
        </ListGroup.Item>
        <ListGroup.Item>Price and description
          <div>Price</div>
          <div>Availability</div>
        </ListGroup.Item>
        </ListGroup>
  
      </Card>

      <br></br>

<Card >

<ListGroup variant="flush">
  <ListGroup.Item>Rating chart
    <div>Price</div>
    <div>Availability</div>
  </ListGroup.Item>
  </ListGroup>

</Card>
    
    </Container>

    </div>
  )
}

export default SingleProduct