import { addProduct, calcStock, products } from "./product.service";

addProduct({
  name: 'product1',
  createdAt: new Date(),
  stock: 12,
  size: 'XL'
})

addProduct({
  name: 'product2',
  createdAt: new Date(),
  stock: 100,
  size: 'L'
})

addProduct({
  name: 'product3',
  createdAt: new Date(),
  stock: 6,
})

console.log(products)

const total = calcStock()

console.log(total)
