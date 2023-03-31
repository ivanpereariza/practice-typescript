import { Product } from "./product.model"

const products: Product[] = []

const addProduct = (data: Product) => {
  products.push(data)
}

const calcStock = (): number => {
  let total = 0
  products.forEach(elm => total += elm.stock)
  return total
}

export { addProduct, calcStock, products }
