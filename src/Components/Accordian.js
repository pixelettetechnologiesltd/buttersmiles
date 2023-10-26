import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Row, Col } from "react-bootstrap"
import "../Assests/css files/Accordian.css"
const Accordian = () => {
  return (
    <>
      <Row>
        <Accordion className='makeaccordrow'>
          <Col md={6}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Discover more about Butterfly Brilliance 10K: What sets our collection apart?</Accordion.Header>
              <Accordion.Body>
                Our collection is a celebration of metamorphosis and vibrant aesthetics, each Butterfly NFT is a unique piece of generative art encapsulating the essence of transformation and digital uniqueness. With a strong community backing and a roadmap aimed at real-world impact through our Butterfly Labs initiative, we're more than just a digital art collection.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>The Artists Behind The Wings: Who are the creative minds crafting these digital wonders?</Accordion.Header>
              <Accordion.Body>
                Our talented team of artists come from diverse backgrounds, each bringing a unique flavor to the table. They're passionate about digital creativity and are the force behind the ethereal beauty of each butterfly. As we flutter towards our launch, we'll be featuring artist spotlights to introduce the brilliant minds behind our project.
              </Accordion.Body>
            </Accordion.Item>
          </Col>

          <Col md={6}>
            <Accordion.Item eventKey="2">
              <Accordion.Header>The Journey Ahead: What does the roadmap hold for our community?</Accordion.Header>
              <Accordion.Body>
                Our roadmap is a journey of engaging milestones and community-driven initiatives. From the unveiling of the Butterfly Artist Fund to the launch of our Butterfly Labs, each step is designed to add value to our holders and broaden the scope of what we can achieve together.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Engaging with Butterfly Labs: How can you get involved and let your ideas soar?</Accordion.Header>
              <Accordion.Body>
                Butterfly Labs is an ecosystem where creativity and blockchain innovation coalesce. Whether you're an artist, a tech enthusiast, or someone with a revolutionary idea, we invite you to join us. Stay tuned for our community forums, collaboration opportunities, and events that will provide a platform for you to interact, learn, and grow alongside Butterfly Brilliance.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Accordion>
      </Row>
    </>
  )
}

export default Accordian