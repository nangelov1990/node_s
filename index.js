const cluster = require('cluster')
const http = require('http')
const cpus = require('os').cpus().length

// HEROKU SPECIFIC
const port = process.env.PORT || 1337

// DEV, STAGE, PROD envs
const environment = process.env.NODE_ENV

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

// fs.readFile('index.js', 'utf8', (err, data) => {
//   if (err) console.error(err)
  
//   console.log(data)
// })

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
