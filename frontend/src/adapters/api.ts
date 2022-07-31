import Axios, { AxiosResponse } from "axios";

export const PROXY_API: string = `http://localhost:3001`;

export const getProducts = async () => {
    return await Axios.get(`${PROXY_API}/products`)
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((error: string) => {
            throw new Error(error)
        })
}