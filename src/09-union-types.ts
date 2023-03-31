(() => {

  let myDynamicVar: string | number

  myDynamicVar = 10
  myDynamicVar = 'Hola'

  const greeting = (myText: string | number) => {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }

  greeting('Ivan')
  greeting(1212.1222221221231)

})()
