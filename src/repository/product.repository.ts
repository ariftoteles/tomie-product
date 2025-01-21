import axios from "axios"
import { FAKESTORE_API } from "../config/config"
import { Product } from "../entity/product.entity"

class ProductRepository {
  async fetchProducts(): Promise<Product[]> {
    try {
      
      const response = await axios.get(`${FAKESTORE_API}/products`)
      return response.data
      
    } catch (error) {
      throw error
    }
  }

  async fetchProduct(id: number): Promise<Product> {
    try {
      
      const response = await axios.get(`${FAKESTORE_API}/products/${id}`)
      return response.data
      
    } catch (error) {
      throw error
    }
  }
}

export default new ProductRepository()