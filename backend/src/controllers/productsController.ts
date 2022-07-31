import { Request, Response } from "express";
const Product = require("../models/Product");

async function getProducts(req: Request, res: Response) {
  const products = await Product.find();
  res.send(products);
}

async function updateProduct(req: Request, res: Response) {
  await Product.findOneAndUpdate({ id: req.params.id }, req.body);
  res.sendStatus(200);
}

export default {
  getProducts,
  updateProduct,
};
