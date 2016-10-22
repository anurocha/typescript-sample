import * as fs from "fs";


// readFile().then(content=>{
//   console.log(content);
// })
console.log('before read');
test();
console.log('done');

async function test(){
 let x = await readFile('./test.txt');
 console.log(x);
 console.log('end x');
 console.log('before y');
 let y = await readFile('./b.txt');
 console.log(y);
}

async function readFile(filename : string){
    return new Promise<string>(resolve =>{
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        resolve(data);
    });
  });
}