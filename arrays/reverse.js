const reverse = (array) => new Array(array.reverse())

const reverse2 = (array) => {
  const reversed = []

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i])
  }
  return reversed
}

let array = [1, 2, 3]
reverse(array)
console.log(array)

let array2 = [4, 5, 6]
array2 = reverse2(array2)
console.log(array2)
