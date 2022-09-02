import {React} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../Assests/css files/Simpleslider.css"
const Simpslider = (props) => {
    return(
    <Carousel fade interval={2500} pause={false} >
      <Carousel.Item >
        <img src={props.image8} width="100%" alt="slide-8"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={props.image9} width="100%" alt="slide-9"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={props.image10} width="100%" alt="slide-10"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
           src={props.image11} width="100%" alt="slide-11"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
           src={props.image12} width="100%" alt="slide-12"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
           src={props.image13} width="100%" alt="slide-13"
        />
      </Carousel.Item>
    </Carousel>
  );

   
}

export default Simpslider