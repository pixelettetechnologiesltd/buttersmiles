import {React} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../Assests/css files/Simpleslider.css"
const Simpslider = (props) => {
    return(
    <Carousel fade interval={2500} pause={false} >
      <Carousel.Item >
        <img src={props.image} width="100%" alt="slide-1"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={props.image1} width="100%" alt="slide-2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={props.image} width="100%" alt="slide-3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
           src={props.image1} width="100%" alt="slide-4"
        />
      </Carousel.Item>
    </Carousel>
  );

   
}

export default Simpslider