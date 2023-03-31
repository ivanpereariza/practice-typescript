import lodash from 'lodash'

const data = [
  {
    username: 'Ivan',
    role: 'ADMIN'
  },
  {
    username: 'Ana',
    role: 'SELLER'
  },
  {
    username: 'Valentin',
    role: 'SELLER'
  },
  {
    username: 'Lucia',
    role: 'CUSTOMER'
  },
  {
    username: 'Esther',
    role: 'CUSTOMER'
  }
]

const rta1 = 1 + '1'


const rta = lodash.groupBy(data, (elm) => elm.role)

console.log(rta)
