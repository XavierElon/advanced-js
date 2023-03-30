const chunk = (array, size) => {
  const newArray = []
  let index = 0
  while (index < array.length) {
    newArray.push(array.slice(index, size + index))
    index += size
  }
  return newArray
}

const data = [1, 2, 3, 4, 5, 6, 7]

console.log(chunk(data, 2))
console.log(chunk(data, 3))
