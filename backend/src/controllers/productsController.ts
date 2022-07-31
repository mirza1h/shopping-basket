import { Request, Response } from "express";
import Product from "../models/Product";

async function getProducts(req: Request, res: Response) {
  const products = await Product.find();
  products.length
    ? res.send(products)
    : res.status(500).send("Failed to fetch products!");
}

async function updateProduct(req: Request, res: Response) {
  await Product.findOneAndUpdate({ id: req.params.id }, req.body);
  res.status(200);
}

export default {
  getProducts,
  updateProduct,
};
