import React from "react";
import "../Assests/css files/Form.css";
import { Container, Row, Col } from "react-bootstrap";

const Form = () => {
  return (
    <div>
      <section className="form-blue-bg">
        <Container>
          <Row>
            <Col md={5} className="mt-5">
              <p className="from-black-head pt-5 mt-4">
                Send us <br></br> your<br></br> queries!
              </p>
              <p className="form-spam-text">
                Your questions and feedback are invaluable to us, helping us to refine and enrich the Butterfly Brilliance experience. Rest assured, we never spam, and your information is safe with us.
              </p>
              <p className="form-email-left mt-5">
                <a href="mailto:info@buttersmiles.com" style={{color:"black", textDecoration:"none"}}>info@buttersmiles.com</a>
              </p>
            </Col>
            <Col md={1}></Col>
            <Col md={6} className="form-dic-padding">
              <div className="form-bg">
                <p className="get-in-touch">Get in touch with us</p>
                <form className="mt-3">
                  <input type="text" id="name" name="name" placeholder="Name" />
                  <br></br>
                  <input type="phone" id="phone" name="phone" placeholder="Phone" />
                  <br></br>
                  <input type="email" id="email" name="phone" placeholder="Email"></input>
                  <br></br>
                  <input type="textarea" id="message" name="message" placeholder="Message"></input>
                  <br></br>
                  <input className="form-button" type="submit" id="button" name="button" value="Send Now"></input>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Form;
