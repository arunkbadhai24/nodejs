//FS module
const {readFileSync,writeFileSync} = require('fs')
//const fs = require('fs') 

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');


// console.log(first,second);

writeFileSync('./content/restult-sysc.txt',`Here is the result : ${first}, ${second}`,{flag:'a'})

