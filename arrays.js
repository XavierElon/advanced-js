const data = [
  { id: 1, name: 'Elon', items: ['apples', 'bananas'], subscribed: true },
  {
    id: 2,
    name: 'Steve',
    items: ['onions', 'bananas', 'pears'],
    subscribed: true,
  },
  { id: 3, name: 'Andy', items: ['potatoes', 'oranges'], subscribed: false },
  { id: 4, name: 'Ryan', items: ['bananas', 'bananas'], subscribed: false },
  { id: 5, name: 'Cohen', items: ['apples', 'strawberries'], subscribed: true },
]

const data2 = [
  {
    id: 6,
    name: 'Achilles',
    items: ['potatoes', 'oranges'],
    subscribed: false,
  },
  { id: 7, name: 'Flocka', items: ['bananas', 'bananas'], subscribed: false },
  { id: 8, name: 'Zuck', items: ['apples', 'strawberries'], subscribed: true },
]

const array1 = [1, 2, 3, 4, 5]

const arr1 = [0, 1, 2, [3, 4]]

let posts = []
const fetchPosts = async () => {
  posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(async (response) => {
      return await response.text()
    })
    .catch((error) => console.log(error))

  console.log(posts)
}

const filterArray = () => {
  let res = data.filter((item) => item.items.includes('apples'))
  console.log(res)
  res.map((item) => console.log(item.name))
}

const atArray = () => {
  console.log(data.at(1))
}

const concatArray = () => {
  const array = data.concat(data2)
  console.log(array)
}

const fillArray = () => {
  console.log(array1.fill(0, 0, 4))
}

const findArray = () => {
  const found = data.find((element) => element.name === 'Steve')
  console.log(found)
}

const flatArray = () => {
  console.log(arr1.flat())
}

const forEachArray = () => {
  data2.forEach((element) => console.log(element))
}

const fromArray = () => {
  const str = 'foo'
  const arr = [1, 2, 3]
  console.log(Array.from(str))
  console.log(Array.from(arr, (x) => x + x))
  console.log(Array.from([1, 2, 3], (x) => x + x))
}

const includesArray = () => {
  const array = [1, 2, 3]
  console.log(array.includes(1))
}

const joinArray = () => {
  const elements = ['Fire', 'Air', 'Water']
  console.log(elements.join())
  console.log(elements.join(''))
  console.log(elements.join('-'))
}

const mapArray = () => {
  const arr = [1, 3, 9, 81]
  const map = arr.map((x) => x * 2)
  console.log(map)
}

const popArray = () => {
  const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
  plants.pop()
  console.log(plants)
}

const pushArray = () => {
  const newItem = {
    id: 6,
    name: 'Achilles',
    items: ['achilles', 'strawberries'],
    subscribed: false,
  }
  data.push(newItem)
  console.log(data)
}

const reverseArray = () => {
  const array1 = ['one', 'two', 'three']
  console.log(array1)
  console.log(array1.reverse())
}

const shiftArray = () => {
  const arr = [1, 2, 3]
  const firstElement = arr.shift()
  console.log(firstElement)
  console.log(arr)
}

const sliceArray = () => {
  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
  console.log(animals.slice(2))
  console.log(animals.slice(2, 4))
  console.log(animals.slice(-2))
  console.log(animals.slice(2, -1))
  console.log(animals.slice())
}

const sortArray = () => {
  const months = ['March', 'Jan', 'Feb', 'Dec']
  months.sort()
  console.log(months)

  const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
  ]

  items.sort((a, b) => a.value - b.value)
  console.log(items)
  items.sort((a, b) => b.value - a.value)
  console.log(items)

  items.sort((a, b) => {
    const nameA = a.name.toUpperCase() // ignore upper and lowercase
    const nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })
  console.log(items)
}

const spliceArray = () => {
  const months = ['Jan', 'March', 'April', 'June']
  months.splice(1, 0, 'Feb')
  console.log(months)
  months.splice(4, 1, 'May')
  console.log(months)
}

const toStringArray = () => {
  const arr = [1, 2, 'l', '23']
  console.log(arr.toString())
}

const unshiftArray = () => {
  const arr = [1, 2, 3]
  console.log(arr.unshift(4, 5))
  console.log(arr)
}

const valuesArray = () => {
  const arr = ['a', 'b', 'c']
  const iterator = arr.values()
  for (const val of iterator) {
    console.log(val)
  }
}

const main = () => {
  filterArray()
  //   fetchPosts()
  //   atArray()
  //   concatArray()
  // fillArray()
  // findArray()
  // flatArray()
  // forEachArray()
  // fromArray()
  // includesArray()
  // joinArray()
  // mapArray()
  // popArray()
  //   pushArray()
  // reverseArray()
  // shiftArray()
  // sliceArray()
  // sortArray()
  // spliceArray()
  // toStringArray()
  // unshiftArray()
  // valuesArray()
}

main()
