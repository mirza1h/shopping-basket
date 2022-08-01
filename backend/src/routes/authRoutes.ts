import { Express } from "express";
import authController from "../controllers/authController";

function authRoutes(app: Express) {
  app.post("/auth", authController.userLogin);
}

export default authRoutes;
