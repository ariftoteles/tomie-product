import { Request, Response, NextFunction } from "express"
import productService from "../services/product.service"
import { StatusCodes } from "../utils/constants/status-code"

class ProductController {
  async fetchProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      
      const products = await productService.fetchProducts()
      res.status(StatusCodes.Ok200).json(products)
      
    } catch (error) {
      next(error)
    }
  }

  async orderProduct(
    req: Request<
		never,
		never,
		{ id: number; quantity: number;},
		never
	>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {

		  const { id, quantity } = req.body

      
      const product = await productService.orderProduct({ id, quantity })
      res.status(StatusCodes.Created201).json(product)
      
    } catch (error) {
      next(error)
    }
  }
}

export default new ProductController()