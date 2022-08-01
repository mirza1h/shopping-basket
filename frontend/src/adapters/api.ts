import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Product } from "../types/ProductType";

export const PROXY_API: string = `http://localhost:3001`;

export const getProducts = async (requestParams?: AxiosRequestConfig) => {
  return await Axios.get(`${PROXY_API}/products`, requestParams)
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((error: string) => {
      throw new Error(error);
    });
};

export const addProduct = async (product: Product) => {
  updateProduct({
    ...product,
    added: true,
    removed: false,
    timeAddedToCart: new Date(),
  });
};

export const removeProduct = async (product: Product, reason: string) => {
  updateProduct({
    ...product,
    removed: true,
    added: false,
    reason: reason,
    timeRemovedFromCart: new Date(),
  });
};

const updateProduct = async (product: Product) => {
  return await Axios.put(`${PROXY_API}/products/${product.id}`, product).catch(
    (error: string) => {
      throw new Error(error);
    }
  );
};

export const getRemovedProducts = async () => {
  return await getProducts({ params: { removed: true } });
};

export const authenticateUser = async (userData: any) => {
  return await Axios.post(`${PROXY_API}/auth`, userData)
    .then((response: AxiosResponse) => {
      localStorage.setItem("token", JSON.stringify(response.data));
    })
    .catch((error: AxiosResponse) => {
      throw error;
    });
};
