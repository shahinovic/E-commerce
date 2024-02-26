import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = "https://ecommerce.routemisr.com";
const token = localStorage.getItem("token");

export const addToWishList = (productId) => {
  return axios.post(
    `${baseUrl}/api/v1/wishlist`,
    { productId },
    { headers: { token } }
  );
};

export const removeFromWishList = (id) => {
  return axios.delete(`${baseUrl}/api/v1/wishlist/${id}`, {
    headers: { token },
  });
};

export const getWishList = () => {
  return axios.get(`${baseUrl}/api/v1/wishlist`, { headers: { token } });
};

export const useChangeWishList = (fn) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fn,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries({ queryKey: ["wishList"] });
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};

export const useGetWishList = (fn) => {
  return useQuery({
    queryKey: ["wishList"],
    queryFn: fn,
  });
};
