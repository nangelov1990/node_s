const cluster = require('cluster')
const http = require('http')
const cpus = require('os').cpus().length
const port = 1337

if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork()
  }

  // If cluster is shut for some reason
  // new one is created right away
  cluster.on('close', (worker) => {
    cluster.fork()
  })
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200)
      res.write('Hi from NodeJS')
      res.end()
    })
    .listen(port)
}

// const fs = require('fs')
// const dirName = './Test'

// fs.exists(dirName, (exists) => {
//   if (!exists) {
//     fs.mkdir(dirName, (err) => {
//       if (err) console.error(err)
//     })
//   }
// })

// http
//   .createServer((req, res) => {
//     res.writeHead(200)
//     res.write('Hi from NodeJS')
//     res.end()
//   })
//   .listen(port)
//
// console.log(`Server listening on port ${port}`)
