let http = require('http')
let port = 1337

http
    .createServer((req, res) => {
        res.writeHead(200)
        res.write('Hi from NodeJS')
        res.end()
    })
    .listen(port)
