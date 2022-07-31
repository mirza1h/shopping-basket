import { Request, Response } from "express";
const Product = require("../models/Product");

async function getProducts(req: Request, res: Response)  {
    const products  = await Product.find();
    res.send(products);
};

export default {
    getProducts,
};
