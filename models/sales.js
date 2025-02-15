import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
  salespersonName: { type: String, required: true },
  branch: { type: String, required: true },
  amount: { type: Number, required: true, min: 1 },
  description: { type: String },
});

const Sales = mongoose.model("Sales", salesSchema);

export default Sales;
