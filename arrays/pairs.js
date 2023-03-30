const fromPairs = (array) =>
  array.reduce((accumulator, value) => {
    if (Array.isArray(value)) {
      accumulator[value[0]] = value[1]
    }
    return accumulator
  }, {})
const data = [
  ['a', 1],
  ['b', 2],
]

console.log(fromPairs(data))
