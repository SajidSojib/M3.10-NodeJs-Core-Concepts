const path = require('path');

console.log(`\ncurrent file info`);
console.log(`filename: `, __filename);
console.log(`directory: `, __dirname);
console.log(`-`.repeat(100)+'\n');


const filepath = '/sajid/documents/code/input/4path-besic.js';
console.log(`analyzing path: `, filepath);
console.log(`directory: `, path.dirname(filepath));      //? /sajid/documents/code/input
console.log(`basename: `, path.basename(filepath));      //? 4path-besic.js
console.log(`filename: `, path.basename(filepath, path.extname(filepath)));   //? 4path-besic
console.log(`extension: `, path.extname(filepath));      //? .js
console.log(`-`.repeat(100)+'\n');


const parsedPath = path.parse(filepath);
const formatedPath = path.format(parsedPath);
console.log(parsedPath);
console.log(formatedPath);
console.log(`-`.repeat(100)+'\n');



console.log();