const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("New Request Recieved");
    res.end('Hello From Server');
})

server.listen(8000,()=>{
    console.log("Server Started")
})