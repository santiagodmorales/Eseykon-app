import React from 'react';
import './HomeCarousel.css';
import Carousel from 'react-bootstrap/Carousel';

    const HomeCarousel = () => {
      return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cadenaser00.epimg.net/ser/imagenes/2018/10/24/economia/1540382847_441132_1540383351_noticia_normal.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.dynaparencoders.com.br/blog/es/wp-content/uploads/sites/2/2017/01/automa%C3%A7%C3%A3o-ind%C3%BAstrial.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://herosu.com.mx/wp-content/uploads/2019/07/KUKA-SIEMENS.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default HomeCarousel