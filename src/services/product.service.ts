import productRepository from "../repository/product.repository"
import { Product } from "../entity/product.entity"
import NotFoundError from "../utils/errors/not-found.error"
import BadRequestError from "../utils/errors/bad-request.error"

class ProductService {
  async fetchProducts(): Promise<Product[]> {
    try {
			const products = await productRepository.fetchProducts()

			products.map((item) => {
				if (item.id % 2 === 0) {
					item.stock = "IN_STOCK"
					return item
				} else {
					item.stock = "OUT_OF_STOCK"
					return item
				}
			})

			return products
			
		} catch (error) {
			throw error
		}
  }

	async orderProduct(params: { id: number; quantity: number }): Promise<{msg: string}> {
		try {
			const { id, quantity } = params

			const product = await productRepository.fetchProduct(id)

			if (!product) {
				throw new NotFoundError("Product not found");
			}

			if (product.id % 2 !== 0 || product.id < quantity) {
				throw new BadRequestError("Out of stock")
			}

			return {
				msg: "Order placed succesfully"
			}

		} catch (error) {
			throw error
		}
	}
}

export default new ProductService()