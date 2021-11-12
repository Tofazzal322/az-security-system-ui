import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImg1 from "../../images/banner1.png";
import bannerImg2 from "../../images/banner2.png";
import bannerImg3 from "../../images/banner3.png";

const Banner = () => {
  return (
    <Carousel id="banner" variant="dark" fade>
      <Carousel.Item>
        <img className="carousel-img d-block w-100 h-100" src={bannerImg1} alt="First slide" />
        <Carousel.Caption className="mb-5 pb-5 carousel-caption text-light  fw-bold">
          <h3 className="fw-bold fs-1">Let the World See More Hope of Life</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={bannerImg2} alt="Second slide" />
        <Carousel.Caption className="mb-5 pb-5 carousel-caption text-light fw-bold">
          <h3 className="fw-bold  fs-1">Aid for Smiling Angel</h3>
          <p>Protecting Endangered Yangtze Finless Porpoise</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block  w-100 h-50" src={bannerImg3} alt="Third slide" />
        <Carousel.Caption className="mb-5 pb-5 carousel-caption text-light fw-bold">
          <h3 className="fw-bold fs-1">See Far, Go Further</h3>
          <p>An IoT solution provider with video as its core competency</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
