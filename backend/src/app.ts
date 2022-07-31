import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import productsRoutes from "./routes/productsRoute";

const app: Express = express();

dotenv.config();

const options: cors.CorsOptions = {
  credentials: true,
  origin: [
    "http://127.0.0.1:5173",
  ],
};

app.use(cors(options));
app.use(express.json());

connectDB();

productsRoutes(app);

app.listen(process.env.PORT, () => {
  console.log("Server started on port: " + process.env.PORT);
})
