const unique = (array) => {
  Array.from(new Set(array))
}

const data = [1, 2, 1, 3, 2]

const unique2 = (array) => {
  return array.filter((element, id) => array.indexOf(element) === id)
}
console.log(unique2(data))
