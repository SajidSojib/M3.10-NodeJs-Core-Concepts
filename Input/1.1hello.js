console.log("node version: ", process.version);
console.log(`platform: `, process.platform);
console.log(`argument: `, process.argv);

// process.argv[0] -> node path
// process.argv[1] -> file path
// process.argv[2] -> argument

const name = process.argv[2] || "guest";
const time = new Date().getHours();

if(time < 12) {
    console.log(`Good Morning ${name}`);
} else if (time < 18) {
    console.log(`Good Afternoon ${name}`);
} else {
    console.log(`Good Evening ${name}`);
}

//? if we run node Input/hello.js  -> we get argument: [ 'node', 'Input/hello.js' ]
//? if we run node Input/hello.js John  -> we get argument: [ 'node', 'Input/hello.js', 'John' ]