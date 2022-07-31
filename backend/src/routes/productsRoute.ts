import { Express } from "express";
import productsController from "../controllers/productsController";

function productsRoutes(app: Express) {
  app.get("/products", productsController.getProducts);
}

export default productsRoutes;
