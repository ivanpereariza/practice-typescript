(() => {

  type UserID = string | number

  let userId: UserID


  //LITERAL TYPES

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  let shirtSize: Sizes

  shirtSize = 'S'

  const greeting = (userId: UserID, size: Sizes) => {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()} ${size}`)
    } else {
      console.log(`number ${userId.toFixed(1)} ${size}`)
    }
  }

  greeting(1222.123123132, 'XL')
  greeting('1222', 'M')

})()
