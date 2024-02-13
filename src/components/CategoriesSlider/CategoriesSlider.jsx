import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const CategoriesSlider = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const { data } = await axios.get(
      "https://route-ecommerce.onrender.com/api/v1/categories"
    );
    setCategories(data.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };
  return (
    <div className="my-5">
      <h4>Shop Popular Categories</h4>
      <Slider {...settings}>
        {categories.map((category) => (
          <div
            key={category.id}
            className=" px-1 text-center"
            style={{ height: "200px", overflow: "hidden" }}
          >
            <img
              src={category.image}
              className="w-100"
              style={{ height: "170px" }}
              alt={category.name}
            />
            <h5
              className="card-title"
              style={{ fontSize: "14px", marginTop: "10px" }}
            >
              {category.name}
            </h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesSlider;
