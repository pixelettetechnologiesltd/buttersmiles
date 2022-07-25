import React from 'react'
import "../Assests/css files/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Row, Col, Image} from 'react-bootstrap';
import {images} from "../Images";
import Simpslider from './Simpslider';

function BasicExample() {

  return (
    <div>
      <section className='bg-for-header' id='home'>
    <Navbar className='bg-color-header sticky-menu' bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">PixiFlies.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#modsquad">Mod Squad</Nav.Link>
            <Nav.Link href="#roadmap">Road Map</Nav.Link>
            <Nav.Link href="#labs">Labs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className="give-head-marg-top">
        <Row>
            <Col md={3}></Col>
            <Col md={6} className="padd-left-right" >
                <p className='pixi-home-head-black'>PixiFlies <span className='font-size-for-mbl' style={{fontSize:"72px", fontWeight:"700"}}>10K.</span></p>
                <p className='pixi-home-para-black-cent'>Generative art collection featuring women of diverse backgrounds with a wide selection of colorful, fun attributes.</p>
                <button className='pixi-button'><a className='text-dec' href=''>View on OpenSea</a></button>
            </Col>
            <Col md={2}></Col>
            <Col md={1} className="flex-col">
              <Image className='mt-3 head-icon' src={images.twithead} width="30px"></Image>
              <Image className='mt-3 head-icon' src={images.descordhead} width="30px"></Image>
              <Image className='mt-3 head-icon' src={images.circhead} width="30px"></Image>
            </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4} className="slider-set">
            <Simpslider image={images.slide1} image1={images.slide2} />
          </Col>
          <Col md={4} className="slider-set">
          <Simpslider image={images.slide2}  image1={images.slide1}/>
          </Col>
          <Col md={2}></Col>
        </Row>
    </Container>
    </section>

    </div>
  );
}

export default BasicExample;