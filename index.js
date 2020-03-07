const http = require('http')
const port = 1337

http
  .createServer((req, res) => {
    res.writeHead(200)
    res.write('Hi from NodeJS')
    res.end()
  })
  .listen(port)

console.log(`Server listening on port ${port}`)
