import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("Missing MongoDb URL");

  if (isConnected) {
    return console.log("MongoDB already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error: any) {
    console.log(error.message);
  }
};
