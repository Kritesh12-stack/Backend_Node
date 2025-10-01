const fs = require('fs');
const os = require('os');

// fs.writeFileSync('./hello.txt','Hello World');
// fs.writeFileSync('./hello.txt','Hello World 2');
// fs.writeFile('./hello.txt','Hello World 3',(err)=>{});

// console.log(fs.readFileSync('./hello.txt','utf-8'))
// console.log(fs.readFileSync('./hello.txt','utf-8',(err,res)=>{
//     if(err){
//         return `Error : ${err}`
//     }
//     else{
//         return res;
//     }
// }))

// fs.appendFileSync('./hello.txt',' \n NewLine Added')

console.log(os.cpus().length);

