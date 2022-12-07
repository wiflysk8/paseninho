import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import imageDemo from "../../assets/images/bg.png";
import { CarouselWrapper } from "./ImageCarouselStyles";

class DemoCarousel extends Component {
  render() {
    return (
      <CarouselWrapper>
        <Carousel showStatus={false} width={"100%"} infiniteLoop={true}>
          <div>
            <img src={imageDemo} alt="demo of " />
          </div>
          <div>
            <img src={imageDemo} alt="demo of " />
          </div>
          <div>
            <img src={imageDemo} alt="demo of " />
          </div>
        </Carousel>
      </CarouselWrapper>
    );
  }
}
export default DemoCarousel;
