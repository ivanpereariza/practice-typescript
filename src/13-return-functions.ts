(() => {

  const calcTotal = (prices: number[]): string => prices.reduce((acc, elm) => acc + elm).toString()



  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`)
  }

  printTotal([10, 11, 10])
  printTotal([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 4, 4, 4, 48, 8, 9])

})()
