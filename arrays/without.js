const without = (array, ...args) => {
  let filteredArray = [...array]

  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
    filteredArray = filteredArray.filter((element) => element !== args[i])
  }
  return filteredArray
}

const data = [1, 2, 3, 1, 2]
console.log(without(data, 1, 2))

const data2 = [1, 2, 3, 1, 2]
console.log(data2.filter((element) => element === 1))
