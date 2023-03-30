const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false

  const compared = firstArray.map((element, id) => {
    return secondArray[id] === element
  })
  console.log(compared)
  return !compared.includes(false)
}

let firstArray = [1, 2, 3]
let secondArray = [1, 2, 3]
let thirdArray = [1, 2, 1]

console.log(isEqual(firstArray, secondArray))
console.log(isEqual(firstArray, thirdArray))
