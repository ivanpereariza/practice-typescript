(() => {
  let productPrice = 100
  productPrice = 12
  console.log('producrPrice', productPrice)

  let customAge: number = 28

  customAge = customAge + 1

  console.log('customAge', customAge)


  let productInStock: number

  console.log('productInStock', productInStock)

  if (productInStock > 10) {
    console.log('is greater')
  }

  let discount = parseInt('123')

  console.log('discount', discount)

  if (discount <= 200) {
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xfff
  console.log('hex', hex)

  let bin = 0b1010
  console.log('bin', bin)

  const myNumber: number = 10
})()
