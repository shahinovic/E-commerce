import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";

const Categories = () => {
  const getCategories = () => {
    return axios.get("https://route-ecommerce.onrender.com/api/v1/categories");
  };
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    select: (data) => data.data.data,
  });

  return (
    <section className="sec">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Categories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="container">
        <h1>Categories</h1>
        <div className="row g-4">
          {data?.map((category) => (
            <div key={category._id} className="col-md-3">
              <img
                src={category.image}
                className="w-100"
                style={{ height: "200px" }}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
