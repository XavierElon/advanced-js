function wash(callback) {
  setTimeout(function () {
    console.log('wash')
    callback()
  }, 3000)
}
function dry(callback) {
  setTimeout(function () {
    console.log('dry')
    callback()
  }, 2000)
}
function fold(callback) {
  setTimeout(function () {
    console.log('fold')
    callback()
  }, 1000)
}

const doLaundry = (arr) => {
  if (arr.length == 0) {
    console.log('Done')
  } else {
    const func = arr.shift()
    func(() => doLaundry(arr))
  }
}

doLaundry([wash, dry, fold])
