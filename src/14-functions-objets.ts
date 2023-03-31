(() => {

  const login = (data: { email: string, password: string | number }) => {
    const { email, password } = data
    console.log(email, password)
  }

  login({
    email: 'ivan@gmail.con',
    password: 12121
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number
    size?: Sizes,
  }) => {

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
