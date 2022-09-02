import React from "react";
import Header from "../Components/Header";
import Accordian from "../Components/Accordian";
import "../Assests/css files/Home.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { images } from "../Images";
import Form from "../Components/Form";
const Home = () => {
  return (
    <div>
      <Header />
      <Container className="marg-top-150" id="about">
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="about-padding">
            <p className="pixi-home-head-black">About Us</p>
            <p className="pixi-home-para-black-cent">
              Generative art collection featuring women of diverse backgrounds
              with a wide selection of colorful, fun attributes.
            </p>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Container id="team">
        <Row className="marg-top-150">
          <Col md={2}></Col>
          <Col md={8} className="padd-left-right-50">
            <p className="pixi-home-head-black">Meet The Team</p>
            <p className="pixi-home-para-black-cent">
              Generative art collection featuring women of diverse backgrounds
              with a wide selection of colorful, fun attributes.
            </p>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <div className="team-border mt-5">
              <div>
                <Image
                  className="team-width-for-mbl"
                  src={images.team1}
                  width="130px"
                ></Image>
              </div>
              <div className="marg-set">
                <p className="team-name">Elissa Maercklein</p>
                <p className="team-team-desig">CEO and CMO</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="team-border-right mt-5">
              <div className="marg-set-right">
                <p className="team-name">Elissa Maercklein</p>
                <p className="team-team-desig">CEO and CMO</p>
              </div>
              <div>
                <Image
                  className="team-width-for-mbl"
                  src={images.team2}
                  width="130px"
                ></Image>
              </div>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="marg-top-100">
          <Col md={2}></Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team21} width="130px"></Image>
              <p className="team-name-center mt-4">Esther</p>
              <p className="team-team-desig-center">Head of Growth</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team22} width="130px"></Image>
              <p className="team-name-center mt-4">Jac</p>
              <p className="team-team-desig-center">Head of Partnerships</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team23} width="130px"></Image>
              <p className="team-name-center mt-4">Dejenna</p>
              <p className="team-team-desig-center">Head of Marketing</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team24} width="130px"></Image>
              <p className="team-name-center mt-4">Joana</p>
              <p className="team-team-desig-center">Creative Director </p>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="marg-top-100" id="modsquad">
          <Col md={4}></Col>
          <Col md={4}>
            <p className="pixi-home-head-black-45">Mod Squad</p>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row className="marg-top-50">
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team31} width="130px"></Image>
              <p className="team-name-center mt-4">Jodes</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team32} width="130px"></Image>
              <p className="team-name-center mt-4">Juanasita</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team23} width="130px"></Image>
              <p className="team-name-center mt-4">Matt</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team2} width="130px"></Image>
              <p className="team-name-center mt-4">MsDinklepuff</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team24} width="130px"></Image>
              <p className="team-name-center mt-4">Nuna</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="img-cent">
              <Image src={images.team21} width="130px"></Image>
              <p className="team-name-center mt-4">Phunky</p>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="roadmap-bg" id="roadmap">
        <Container className="marg-top-100">
          <Row>
            <Col md={4}></Col>
            <Col md={4} className="marg-top-100">
              <p className="pixi-home-head-black">Roadmap</p>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row className="marg-top-50">
            <Col md={5}>
              <Image
                className="road-img-mbl-set"
                src={images.roadmap}
                width="90%"
              ></Image>
            </Col>
            <Col md={1} sm={1} xs={1} className="marg-top-mbl-road">
              <div className="vertical-text">
                <div className="road-months set-month-for-mobile">APRIL</div>
                <div className="road-months set-month">MAY</div>
                <div className="road-months set-month-more">UPCOMING</div>
              </div>
            </Col>
            <Col md={1} sm={1} xs={1} className="marg-top-mbl-road">
              <Image src={images.roadmapline} height="88%"></Image>
            </Col>
            <Col md={5} sm={10} xs={9} className="marg-top-mbl-road">
              <p className="list-head">
                Double click into providing value for our community and holders
              </p>
              <ul>
                <li className="list-item-type">
                  Showcase Women Artist Fund artists & conduct community
                  giveaways
                </li>
                <li className="list-item-type">Re-open Time Machine Claim</li>
                <li className="list-item-type">
                  Community vote on women artists for upcoming collaborations
                </li>
                <li className="list-item-type">
                  Announce NFT NYC slate of events
                </li>
                <li className="list-item-type">
                  Launch Design Collective, as portion of Women Labs
                </li>
                <li className="list-item-type">
                  Finalize hiring and new CC Leadership Team
                </li>
              </ul>
              <p className="list-head marg-top-45">
                Expand pilots into formal programs & offerings
              </p>
              <ul>
                <li className="list-item-type">
                  Launch limited edition & custom-made CC merch
                </li>
                <li className="list-item-type">
                  Roll out LeadHER programs to support community learning and
                  growth
                </li>
                <li className="list-item-type">
                  Formalize IRL Ambassador Program to kick off global events
                </li>
                <li className="list-item-type">
                  Establish affiliate and influencer program
                </li>
                <li className="list-item-type">
                  Engage first Design Collective cohort
                </li>
              </ul>
              <p className="list-head mt-5 ">
                Expansion into Women Labs ecosystem
              </p>
              <ul>
                <li className="list-item-type">
                  Time Machine generative collection and new 1/1s
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Container id="labs">
        <Row className="marg-top-150">
          <Col md={3}></Col>
          <Col md={6}>
            <p className="pixi-home-head-black">Butterfly Labs</p>
            <p className="home-sub-head">Coming soon...</p>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="mt-4">
          <Col md={5}>
            <Image className="img-for-mbl" src={images.lab} width="85%"></Image>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <p className="pixi-home-para-black padd-right-50 mt-5">
              Our Crypto Chicks ecosystem will be expanding to Women Labs - an
              organization designed to enable and empower women throughout our
              web3 journeys.
            </p>
            <p className="pixi-home-para-black padd-right-50 mt-4">
              Whether you're a creative looking to test the web3 waters, a stay
              at home mom with a genius project idea, an experienced web3
              explorer looking to give back, or a fashion designer wondering how
              web3 fashion works...
            </p>
            <p className="pixi-home-para-black padd-right-50 mt-4">
              ​Check back later for more outfit change teasers on what to expect
              from our Women Labs expansion
            </p>
          </Col>
        </Row>
      </Container>
      <Form/>
      <Container>
        <Row className="marg-top-150 ">
          <Col md={2}></Col>
          <Col md={8}>
            <p className="pixi-home-head-black">Frequently Ask Questions</p>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="marg-top-50  padd-bott-100">
          <Col md={6}>
            <Accordian />
          </Col>
          <Col md={6}>
            <Accordian />
          </Col>
        </Row>
      </Container>
      <section className="black-bg">
        <Container>
        <Row>
          <Col md={6}>
            <p className="copyright">
              Copyright © Buttersmiles.com all rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <p className="copyright-right">
              Powered by Pixelette Technologies
            </p>
          </Col>
        </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
