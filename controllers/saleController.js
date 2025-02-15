import mongoose from "mongoose";
import Sales from "../models/sales.js";
import CustomError from "../utils/customError.js";
import { salesValidationSchema } from "../utils/joiValidation.js";

// Create new Sale
export const createSale = async (req, res, next) => {
  const { error } = salesValidationSchema.validate(req.body);
  if (error) return next(new CustomError(400, error.details[0].message));

  const { salespersonName, branch, amount, description } = req.body;
  const newSale = new Sales({ salespersonName, branch, amount, description });

  await newSale.save();
  res.status(201).json({ message: "Sale created successfully", newSale });
};

// Get all sales
export const getAllSales = async (req, res, next) => {
  const sales = await Sales.find();
  res.status(200).json(sales);
};

// Get a sale by ID
export const getSaleById = async (req, res, next) => {
 

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new CustomError("Invalid sale ID format", 400));
  }

  const sale = await Sales.findById(req.params.id);
  if (!sale){
    return next(new CustomError("sale not found", 404));
  } 

  res.status(200).json(sale);
};

// Update a sale by ID
export const updateSale = async (req, res, next) => {


  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new CustomError("Invalid sale ID format", 400));
  }

  const { error } = salesValidationSchema.validate(req.body);
  if (error) return next(new CustomError(400, error.details[0].message));

  const sale = await Sales.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!sale){
    return next(new CustomError("sale not found", 404));
  } 

  res.status(200).json({ message: "Sale updated successfully", sale });
};

// Delete a sale by ID
export const deleteSale = async (req, res, next) => {


  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new CustomError("Invalid sale ID format", 400));
  }

  const deletedSale = await Sales.findByIdAndDelete(req.params.id);
  if (!deletedSale){
    return next(new CustomError(404, "Sale not found"));
  } 

  res.status(200).json({ message: "Sale deleted successfully" });
};
