import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shoes from "../assets/shoes.png";

import Slider from "react-slick";
import Button from "./Button";

const SalesOffers = () => {
  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Main>
      <Slider {...settings}>
        <div className="slider-container">
          <div className="img-container">
            <img src={shoes} />
          </div>
          <div className="text-container">
            <p>Get 50% Off</p>
            <p>Flash Winter Sales</p>
          </div>
          <div className="button-container">
            <Button />
          </div>
        </div>
        <div className="slider-container">
          <div className="img-container">
            <img src={shoes} />
          </div>
          <div className="text-container">
            <p>Get 30% Off</p>
            <p>Christmas Deal of the Day</p>
          </div>
          <div className="button-container">
            <Button />
          </div>
        </div>
        <div className="slider-container">
          <div className="img-container">
            <img src={shoes} />
          </div>
          <div className="text-container">
            <p>Get 60% Off</p>
            <p>Get your New Years Shoes</p>
          </div>
          <div className="button-container">
            <Button />
          </div>
        </div>
      </Slider>
    </Main>
  );
};

const Main = styled.div`
  .slider-container {
    text-align: center;
    background: linear-gradient(to right, #81b5e9, #c1d3e5);

    .button-container {
      padding: 1rem;
    }

    .img-container {
      width: 50%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
`;

export default SalesOffers;
