import { useContext } from "react";
import { Helmet } from "react-helmet";
import { UserContext } from "../../Context/User";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Brands = () => {
  const { baseUrl } = useContext(UserContext);

  const getBrands = () => {
    return axios.get(`${baseUrl}/api/v1/brands`);
  };

  const { data, refetch } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
    select: (data) => data.data.data,
    enabled: false,
  });
  console.log("🚀 ~ Brands ~ data:", data);
  return (
    <section className="sec">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brands</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 onClick={refetch}>Brands</h2>
      <div className="container">
        <div className="row">
          {data?.map((brand) => (
            <div key={brand._id} className="col-md-3">
              <img src={brand.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
