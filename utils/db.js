import mongoose, { ConnectOptions } from "mongoose";
const url = process.env.DB_HOST;

console.log(url);

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default connectDb;
