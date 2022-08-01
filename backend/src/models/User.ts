import mongoose, { Model, Schema } from "mongoose";
import jwt from "jsonwebtoken";

const userSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, default: 0 },
});

userSchema.methods.generateAuthToken = function () {
  const token: string = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

interface UserDocument extends Document {
  email: string;
  password: string;
  role: number;
  generateAuthToken(): string;
}

interface UserModel extends Model<UserDocument> {
  generateAuthToken(): string;
}

const User = mongoose.model<UserDocument, UserModel>("user", userSchema);

export default User;
