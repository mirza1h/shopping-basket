const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`Mongoose connected`);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
