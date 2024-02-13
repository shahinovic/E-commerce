import { Container } from "react-bootstrap";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import { Helmet } from "react-helmet";

const HomePage = () => {
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
      </Container>
    </div>
  );
};

export default HomePage;
