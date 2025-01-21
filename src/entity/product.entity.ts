import { Stock, Rating } from "../utils/types/product"

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  stock?: Stock
}
