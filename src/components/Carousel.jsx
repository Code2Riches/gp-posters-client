import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  render() {
    return (
      <div className="mt-0 pb-20 ">
        <div className=" flex overflow-hidden relative justify-center rounded-xl">
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block h-[600px] object-cover w-[1000px]"
                      : "hidden"
                  }
                />
              );
            })}
          </Swipe>
        </div>
      </div>
    );
  }
}

export default Carousel;