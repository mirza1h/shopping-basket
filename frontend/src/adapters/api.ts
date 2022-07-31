import Axios, { AxiosResponse } from "axios";
import { Product } from "../types/ProductType";

export const PROXY_API: string = `http://localhost:3001`;

export const getProducts = async () => {
  return await Axios.get(`${PROXY_API}/products`)
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((error: string) => {
      throw new Error(error);
    });
};

export const updateProduct = async (product: Product) => {
  return await Axios.put(`${PROXY_API}/products/${product.id}`, {
    ...product,
    removed: true,
    timeRemovedFromCart: Date.now(),
  }).catch((error: string) => {
    throw new Error(error);
  });
};
