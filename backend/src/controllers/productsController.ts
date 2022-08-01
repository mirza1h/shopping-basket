import { Request, Response } from "express";
import Product from "../models/Product";

async function getProducts(req: Request, res: Response) {
  const products = await Product.find(req.query);
  products.length
    ? res.send(products)
    : res.status(500).send("Failed to fetch products!");
}

async function updateProduct(req: Request, res: Response) {
  await Product.findOneAndUpdate({ id: req.params.id }, req.body, {}, (err) => {
    err ? res.status(200) : res.status(500).send("Failed to update!");
  });
}

export default {
  getProducts,
  updateProduct,
};
