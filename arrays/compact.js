const compact = (array) => array.filter((element) => element)

let array = [1, null, 2, undefined, 3]
let newArray = compact(array)
console.log(newArray)
