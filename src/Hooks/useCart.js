import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = "https://ecommerce.routemisr.com";
const token = localStorage.getItem("token");

// cart
export const addToCart = (productId) =>
  axios.post(
    `${baseUrl}/api/v1/cart`,
    { productId },
    {
      headers: { token },
    }
  );

export const deleteCart = (id) => {
  return axios.delete(`${baseUrl}/api/v1/cart/${id}`, { headers: { token } });
};

export const updateCart = ({ id, count }) => {
  return axios.put(
    `${baseUrl}/api/v1/cart/${id}`,
    { count },
    { headers: { token } }
  );
};

export const clearCart = () => {
  return axios.delete(`${baseUrl}/api/v1/cart`, { headers: { token } });
};

const getCart = () =>
  axios.get(`${baseUrl}/api/v1/cart`, { headers: { token } });

export const useCartCrud = (fn) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fn,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries({ queryKey: ["cart"] });

      if (data.data.session.mode === "payment") {
        window.location.href = data.data.session.url;
      }
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};

export const checkout = ({ id, shippingAddress, url }) => {
  return axios.post(
    `${baseUrl}/api/v1/orders/checkout-session/${id}?url=${url}`,
    { shippingAddress },
    { headers: { token } }
  );
};

export const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    select: (data) => data.data,
  });
};
