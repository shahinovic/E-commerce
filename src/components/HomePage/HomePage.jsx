import { Container } from "react-bootstrap";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import { Helmet } from "react-helmet";
import { UserContext } from "../../Context/User";
import { useContext } from "react";
import Products from "../Products/Products";

const HomePage = () => {
  const { baseUrl } = useContext(UserContext);

  return (
    <div className="home ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Container>
        <MainSlider />
        <CategoriesSlider />
        <Products />
      </Container>
    </div>
  );
};

export default HomePage;
