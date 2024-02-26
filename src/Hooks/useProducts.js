import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseUrl = "https://ecommerce.routemisr.com";

export const getProducts = () => axios.get(`${baseUrl}/api/v1/products`);

export const getProduct = (id) => axios.get(`${baseUrl}/api/v1/products/${id}`);

export const useProducts = (
  key,
  fun = getProducts,
  options = {},
  sele = (data) => data?.data?.data
) =>
  useQuery({
    queryKey: [key],
    queryFn: fun,
    ...options,
    select: sele,
  });
