const flatten = (array) => {
  return array.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val)
  }, [])
}

const data = [1, 2, [3, 4, [5]]]
console.log(flatten(data))
