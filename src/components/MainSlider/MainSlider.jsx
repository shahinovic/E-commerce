import Slider from "react-slick";
import { slider_1, slider_2, slider_3 } from "../../assets";

import { Col, Row } from "react-bootstrap";
// import styles from "./MainSlider.module.css";
// const { main_slider, btn_none } = styles;

const MainSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Row>
        <Col md={8}>
          <Slider {...settings}>
            <img src={slider_1} className="w-100" alt="" />
            <img src={slider_2} className="w-100" alt="" />
            <img src={slider_3} className="w-100" alt="" />
          </Slider>
        </Col>
        <Col md={3} className="d-none d-md-block">
          <img src={slider_1} height={"50%"} className=" w-100" alt="" />
          <img src={slider_2} height={"50%"} className=" w-100" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default MainSlider;
