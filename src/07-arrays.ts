(() => {

  let prices = [1, 2, 3, 4, 5, 10, 111]

  let objets: object[] = []

  objets.push({ name: 'Ivan', age: 27 })

  console.log(objets)

  let prooducts: (string | boolean | number | object)[] = ['hola', true]

  prooducts.push(12)
  prooducts.push({ name: 'Ivan', age: 27 })

  console.log(prooducts)

  let numbers = [1, 2, 3, 4, 5, 10, 111]

  numbers.map(elm => elm * 2)

})()
