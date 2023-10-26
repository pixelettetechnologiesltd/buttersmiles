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
      <Container className="marg-top-150">
        <Row>
          <Col md={1}></Col>
          <Col md={10} className="about-padding">
            <p className="pixi-home-head-black"  id="about">About Us</p>
            <p className="pixi-home-para-black-cent">
            Buttersmiles 10K transcends the ordinary to bring forth a captivating generative art collection. Our NFTs showcase a diverse kaleidoscope of digital butterflies, each embodying a unique blend of color, form, and flight. This initiative is not just about creating digital art, but also about building a community where creativity, innovation, and inclusivity flourish. As we near our launch, we invite you to flutter along on this exciting journey where every butterfly tells a story, and every story is a testament to the boundless realm of digital creativity.
            </p>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <Container>
        <Row className="marg-top-150">
          <Col md={1}></Col>
          <Col md={10} className="padd-left-right-50">
            <p className="pixi-home-head-black"  id="team">Meet The Team</p>
            <p className="pixi-home-para-black-cent">
              Behind the ethereal beauty of our Butterfly NFTs, there's a team of dedicated creators and developers. We bring together a passion for art, the tech-savvy of blockchain, and a vision to flutter towards a future where digital art and real-world change coalesce.
            </p>
          </Col>
          <Col md={1}></Col>
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
        <Row className="marg-top-100">
          <Col md={4}></Col>
          <Col md={4}>
            <p className="pixi-home-head-black-45" id="modsquad">Mod Squad</p>
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
      <section className="roadmap-bg">
        <Container className="marg-top-100">
          <Row>
            <Col md={4}></Col>
            <Col md={4} className="marg-top-100">
              <p className="pixi-home-head-black" id="roadmap">Roadmap</p>
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
                Embarking on a journey to create value for our community and token holders.
              </p>
              <ul>
                <li className="list-item-type">
                  Unveil the Butterfly Artist Fund to spotlight and support talented artists.
                </li>
                <li className="list-item-type">Engage the community in giveaways and special events leading up to the NFT launch.</li>
                <li className="list-item-type">
                  Re-open Time Machine Claim with a fresh, butterfly-themed twist.
                </li>
                <li className="list-item-type">
                  Community voting on artist collaborations for a continual influx of creativity.
                </li>
                <li className="list-item-type">
                  Announce a line-up of events surrounding NFT NYC, keeping the community engaged and informed.
                </li>
                <li className="list-item-type">
                  Launch Design Collective, as part of our broader Butterfly Labs initiative.
                </li>
                <li className="list-item-type">
                  Establish a robust Leadership Team to steer the project towards exciting horizons.
                </li>
                <li className="list-item-type">
                  Transition pilot programs into full-fledged offerings, providing more avenues for community involvement.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="marg-top-150">
          <Col md={3}></Col>
          <Col md={6}>
            <p className="pixi-home-head-black" id="labs">Butterfly Labs</p>
            <p className="home-sub-head">Coming soon...</p>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <Image className="img-for-mbl" src={images.lab} width="85%"></Image>
          </Col>
          {/* <Col md={1}></Col> */}
          <Col md={6}>
            <p className="pixi-home-para-black padd-right-50 mt-5">
            We're not just stopping at NFTs. Butterfly Labs is our initiative to foster a thriving ecosystem around our NFT project. Whether you're an artist, a blockchain enthusiast, or someone with a revolutionary idea waiting to take flight, Butterfly Labs is your launchpad.
            </p>
            <p className="pixi-home-para-black padd-right-50 mt-4">
            We invite you to flutter along with us into a future where creativity knows no bounds. Stay tuned for more teasers on what to expect from our Butterfly Labs expansion.
            </p>
          </Col>
        </Row>
      </Container>
      <Form />
      <Container>
        <Row className="marg-top-150 ">
          <Col md={2}></Col>
          <Col md={8}>
            <p className="pixi-home-head-black">Frequently Ask Questions</p>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="marg-top-50  padd-bott-100">
          <Col md={12}>
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
