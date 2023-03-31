(() => {

  // let myNumber: number
  // let myString: string

  let myNull: null = null
  let myUndefined: undefined = undefined

  let myNumber: number | null = null
  myNumber = 12

  let myString: string | undefined = undefined
  myString = 'Ivan'


  const hi = (name: string | null) => {
    let hello = `Hola `
    hello += name?.toLowerCase() || 'nobody'
    console.log(hello)
  }

  hi('Ivan')
  hi(null)
})()
