import React from 'react'
import { Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap'


const SingleProduct = ({prod}) => {
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}/>
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}>
                <span>$ {prod.price}</span>
                {prod.fastDelivery ? (<div>Fast Delivery</div>) : (<div>4 Days Delivery</div>) }
                <div>
              {[...Array(prod.ratings)].map((rating, index) => (
                <FaStar key={index} color='blue' size={15} />
              ))}
            </div>
            </Card.Subtitle>
            <Button variant='danger'>Remove from Cart</Button>
            <Button>
                {!prod.inStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
