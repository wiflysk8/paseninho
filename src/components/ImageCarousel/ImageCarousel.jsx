import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/images/kids.jpg";
import image2 from "../../assets/images/kids3.jpg";
import image3 from "../../assets/images/kids4.jpg";
import { CarouselWrapper } from "./ImageCarouselStyles";

class DemoCarousel extends Component {
  render() {
    return (
      <CarouselWrapper>
        <Carousel showStatus={false} width={"100%"} infiniteLoop={true}>
          <div>
            <img src={image1} alt="demo of " />
          </div>
          <div>
            <img src={image2} alt="demo of " />
          </div>
          <div>
            <img src={image3} alt="demo of " />
          </div>
        </Carousel>
      </CarouselWrapper>
    );
  }
}
export default DemoCarousel;
