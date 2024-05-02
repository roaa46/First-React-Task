import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import c1 from './Imgs/c1.jpg';
import c2 from './Imgs/c2.jpg';
import c3 from './Imgs/c3.jpg';
import c4 from './Imgs/c4.jpg';
import './Product.css';
function Product() {
  return (
    <div>
        <br></br>
        <h1>Our Products</h1>
      <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={c1} />
          <Card.Body>
            <Card.Title>Brown Jacket</Card.Title>
            <Card.Text>
              It's rich brown hue adds warmth and sophistication to any ensemble, making it a versatile wardrobe essential.
            </Card.Text>
            <Button variant="primary"className='btn'>Explore</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: 'inline-block' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={c2} />
          <Card.Body>
            <Card.Title>cute shirt</Card.Title>
            <Card.Text>
              It's rich dark green hue of dark green adds a touch of opulence to your ensemble, effortlessly elevating your style.
            </Card.Text>
            <Button variant="primary" className='btn'>Explore</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: 'inline-block' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={c3} />
          <Card.Body>
            <Card.Title>red and white blouse</Card.Title>
            <Card.Text>
              It's rich red and white hue adds warmth and sophistication to any ensemble, making it a versatile wardrobe essential.
            </Card.Text>
            <Button variant="primary"className='btn'>Explore</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: 'inline-block' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={c4} />
          <Card.Body>
            <Card.Title>pink blouse</Card.Title>
            <Card.Text>
              It's rich pink hue adds warmth and sophistication to any ensemble, making it a versatile wardrobe essential.
            </Card.Text>
            <Button variant="primary"className='btn'>Explore</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Product;
