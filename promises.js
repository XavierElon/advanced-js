// // fetch('https://jsonplaceholder.typicode.com/posts/1')
// //   .then((response) => {
// //     console.log(response.ok)
// //   })
// //   .catch((error) => {
// //     console.error('Failed')
// //   })

// // fetch('https://jsonplaceholder.typicode.com/posts/1')
// //   .then((response) => response.json())
// //   .then((data) => {
// //     console.log(data)
// //   })

// const fetchPosts = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.error('failed')
//   }
// }

// // fetchPosts()

// const returnPromise = (val) => {
//   return new Promise((resolve, reject) => {
//     if (val > 5) {
//       resolve('achilles')
//     } else {
//       reject('rejected')
//     }
//   })
// }

// const apiCall = async () => {
//   try {
//     console.log(await returnPromise(6))
//   } catch (error) {
//     console.log(error)
//   }
// }

// const apiCall2 = async () => {
//   await returnPromise(6)
//     .then((result) => console.log(result))
//     .catch((error) => {
//       console.log(error)
//     })
//   //   console.log(data)
// }

// apiCall()
// apiCall2()

// import axios from 'axios'

const newEvent = new Promise((resolve, reject) => {
  let name = 'achilles'
  if (name == 'achilles') {
    resolve(name)
  } else {
    reject('Name was not Flocka:  ' + name)
  }
})

newEvent
  .then((name) => {
    console.log('test' + name)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('PROMISE FINISHED')
  })

const fetchData = async () => {
  const data = await axios.get('https://cat-fact.herokuapp.com/facts')
}
