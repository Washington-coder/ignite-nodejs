import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
    _transform(chunk, enconding, callback) {
        const inversedNumber = Number(chunk.toString()) * -1;
        console.log(inversedNumber)
        callback(null, Buffer.from(String(inversedNumber)))
    }
}

const server = http.createServer((req, res) => {
    return req
        .pipe(new InverseNumberStream())
        .pipe(res)
})

server.listen(3334)