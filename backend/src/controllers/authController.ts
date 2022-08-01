import { Request, Response } from "express";
import User from "../models/User";

async function userLogin(req: Request, res: Response) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    if (req.body.password !== user.password)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const token = user.generateAuthToken();
    res.status(200).send({ email: user.email, role: user.role, token });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error: " + error.message });
  }
}

export default {
  userLogin,
};
