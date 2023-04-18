import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import container from 'react-bootstrap/Container';
import { Rating } from 'react-simple-star-rating';
import { FiShoppingCart,FiHeart } from "react-icons/fi";



const ProductCatelog = () => {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
  return (
    <div className='container'>

      <br></br>

      <img src="images/AyuLankaLogo.png" style={{width:'250px' ,he
    :'100px', marginLeft:'20px'}} alt="logo" />
      
      {/* <CardGroup > */}
      <Row xs={1} md={5} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
      <Card>
        <Card.Img variant="top" src="images/img.jpg" />
        <Card.Body>
          <Card.Title style={{textAlign : 'start'}}>Card title</Card.Title>
          <Card.Text style={{textAlign : 'start'}}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Title style={{textAlign : 'start',color:'red'}}> Rs.1500.00    <FiShoppingCart  style={{fontSize:'25px',marginLeft:'20px',color:'black'}}/>
            <FiHeart  style={{fontSize:'25px' , marginLeft: '20px',color:'black'}}/></Card.Title>
            
        </Card.Body>
        <Card.Footer>
          
        <div className='App'>

      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      />
      {/* Use rating value */}
      {rating}

    </div>

        </Card.Footer>
      </Card>
      </Col>
         ))}
     
 
      </Row>
    {/* </CardGroup> */}

    </div>
  )
}

export default ProductCatelog ;