import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import "../assets/css/Home.css";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import cruise from '../assets/images/cruise.avif';
import cruise2 from '../assets/images/cruise2.jpg';
import cruise3 from '../assets/images/cruise3.jpg';
import pool from "../assets/images/pool.webp";
import live from "../assets/images/live.jpg";
import wine from "../assets/images/wine.jpg";
import art from "../assets/images/art.jpg";
import movie from "../assets/images/movie.webp";
import spa from "../assets/images/spa.webp";
import arr from '../assets/images/arr.svg';
import arrow from "../assets/images/arrow.png";
import arr2 from "../assets/images/arr2.svg";
import ban1 from "../assets/images/ban1.png";
import place from "../assets/images/place.jpg";
import Nav from './Nav';
import Footer from './Footer';

const cardStyle = {
  width: '350px',
  height:'400px',
  top:"700px",
  left:"70px"
};

const boxStyle = {
  backgroundColor: '#f2f2f2', 
  padding: '5px', 
  width:'350px',
 marginLeft:'-17px',
 textAlign: 'center',
};

function CustomCard({ title, date, price }) {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={place} />
      <Card.Body>
        <Card.Title style={{ textAlign:'center' }}>{title}</Card.Title>
        <div style={boxStyle}>
          <Card.Text>{date}</Card.Text>
        </div>
        <Card.Text style={{fontSize:"large",marginTop:"15px",marginLeft:"15px"}}>
            Starting From
        </Card.Text>
        <Card.Text style={{fontSize:"medium",marginTop:"-15px",marginLeft:"25px",fontWeight: "bold"}}>
          {price}
        </Card.Text>
        <Button variant="primary" className="bookdown" style={{ backgroundColor: '#8b0087', marginTop: "-110px",marginLeft:"170px",width:"130px"}}><Link to="booking">Book Now</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default function UncontrolledExample() {
  return (
    <div className="home-wrapper">
      <Nav/>
      <Carousel interval={1500}> 
        <Carousel.Item>
          <img className="carousel-img" src={cruise} height="580px" width="1400" alt="First slide" />
          <Carousel.Caption>
            <h3>AquaCruise Booker</h3>
            <p1>Life's better at sea - book your cruise today!</p1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={cruise2} height="580px" width="1400" alt="Second slide" />
          <Carousel.Caption>
            <h3>Cruise Journeys</h3>
            <p1>Set sail for memories that will last a lifetime.</p1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={cruise3}  height="580px" width="1400" alt="Third slide" />
          <Carousel.Caption>
            <h3>Explore, relax, repeat!!</h3>
            <p1>The perfect cruise awaits.</p1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <div className='homerec'>
        <div>
          <h4>Price Starts from</h4>
          <p4>Rs.26,700/Per Person</p4>
        </div>
        <button className="bookNowButton1"><Link to="/booking">Book Now</Link></button>
      </div>
      
      {/* <img className='arr1' src={arr} width="400px" height="150px" /> */}
      <div className='content1'>
        <h5>Unlimited Entertainments</h5>
        <p>Set Sail for Unlimited Entertainment: Dive into a World of Endless Fun on Our Cruise Ship</p>
      </div>

      <Container style={{ marginTop: '220px' }}>
        <Row>
           <Col xs={12} md={4}>
            <div className="image-container">
              <Image src={pool} thumbnail style={{ height: '400px', width:'350px' }}/>
              <div className="overlay">
                <h5>Poolside Parties</h5>
              </div>
            </div>
          </Col> 
            <Col xs={12} md={4}>
            <div className="image-container">
              <Image src={live} thumbnail style={{ height: '400px', width:'450px' }}/>
              <div className="overlay">
                <h5>Live Entertainment</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="image-container">
              <Image src={wine} thumbnail style={{ height: '400px', width:'400px' }}/>
              <div className="overlay">
                <h5>Wine Tasting</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col xs={12} md={4}>
            <div className="image-container">
              <Image src={art} thumbnail style={{ height: '400px', width:'400px' }}/>
              <div className="overlay">
                <h5>Art Exhibitions</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="image-container">
              <Image src={movie} thumbnail style={{ height: '400px', width:'400px' }}/>
              <div className="overlay">
                <h5>Movie Nights</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="image-container">
              <Image src={spa} thumbnail style={{ height: '400px', width:'400px' }}/>
              <div className="overlay">
                <h5>Spa Treatments</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <img className='arr' src={arrow} width="300px" height="50px" />
      <img className='ban' src={ban1} width="1260px" height="250px"/>
      <img className='arr2' src={arr2} width="300px" height="50px" />
      <div className='content2'>
        <h5>Upcoming Cruises</h5>
        <p>Start sailing by booking your Cruise!!</p>
      </div>  
     
      <Row>
  <Col style={{ marginLeft: '-10px' }}>
    <CustomCard 
      title="Cochin-Lakshadweep-Cochin" 
      date="Apr 10, 2024 to Apr 18, 2024" 
      price="Rs.40,358"
    />
  </Col>
  <Col style={{ marginLeft: '-100px' }}>
    <CustomCard 
      title="Cochin-Lakshadweep-Cochin" 
      date="Apr 20, 2024 to Apr 27, 2024" 
      price="Rs.46,782"
    />
  </Col>
  <Col style={{ marginLeft: '-100px' }}>
    <CustomCard 
      title="Cochin-Lakshadweep-Cochin" 
      date="May 1, 2024 to May 7, 2024" 
      price="Rs.37,850"
    />
  </Col>
</Row>
<Footer/>
    </div>
  );
}
