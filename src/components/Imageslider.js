import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <div className="wrap">
        <Link to="" className="links">
          <img src="assets/images/slider-badging.jpg" alt="" className="img" />
        </Link>
      </div>

      <div className="wrap">
        <Link to="" className="links">
          <img src="assets/images/slider-scale.jpg" alt="" className="img" />
        </Link>
      </div>

      <div className="wrap">
        <Link to="" className="links">
          <img src="assets/images/slider-badag.jpg" alt="" className="img" />
        </Link>
      </div>

      <div className="wrap">
        <Link to="" className="links">
          <img src="assets/images/slider-scales.jpg" alt="" className="img" />
        </Link>
      </div>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

export default ImgSlider;
