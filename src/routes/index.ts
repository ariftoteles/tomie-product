import express from "express"
import productController from "../controllers/product.controller"
import { validateOrderProduct } from "../utils/validation/product.validation"

const router = express.Router()

router.get("/products", productController.fetchProducts)
router.post("/order", validateOrderProduct, productController.orderProduct)

export default router