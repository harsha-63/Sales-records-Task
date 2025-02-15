import express from "express";
import { createSale, getAllSales, getSaleById, updateSale, deleteSale } from "../controllers/saleController.js";
import trycatch from "../utils/tryCatch.js";

const router = express.Router();

router.post("/sales", trycatch(createSale));
router.get("/sales",trycatch(getAllSales));
router.get("/sales/:id", trycatch(getSaleById));
router.put("/sales/:id", trycatch(updateSale));
router.delete("/sales/:id", trycatch(deleteSale));

export default router;
