(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number
    size?: Sizes,
  }

  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data)
  }


  addProduct({
    title: 'product1',
    createdAt: new Date(),
    stock: 12,
    size: 'XL'
  })

  addProduct({
    title: 'product2',
    createdAt: new Date(),
    stock: 100,
    size: 'L'
  })

  addProduct({
    title: 'product3',
    createdAt: new Date(),
    stock: 5,
  })

  console.log(products)

})()
