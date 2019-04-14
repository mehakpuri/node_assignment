var http = require('http')
var server = http.createServer((req, res) => {

res.writeHead(200, { 'Content-Type': 'application/json' })
//Creating an object...
    var Objects = {
        name: 'John',
        age: 20,
        hobby: 'Badminton'
    }
//converting object into json...
    res.end(JSON.stringify(Objects))
});

server.listen(3002, '127.0.0.1')
console.log('Json Server port no 3002')
