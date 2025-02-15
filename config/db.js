import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("DB Connected")
  );
  try {
    // connecting
    await mongoose.connect(`${process.env.MONGODB_URI}/sales`),{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, 
      socketTimeoutMS: 45000,  }
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
