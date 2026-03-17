const http = require('http')

const server = http.createServer((req, res) => {
    const { url, method } = req

    console.log(url, method)

    return res.end('Hello ')
})

server.listen(3333)