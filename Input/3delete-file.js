const fs = require('fs');

console.log(`Syncronously deleting file.........`);
fs.writeFileSync("Output/3temp.txt", "temporary file");
console.log(`temp file created`);

if(fs.existsSync("Output/3temp.txt")) {
    console.log(`file exists`);
    fs.unlinkSync("Output/3temp.txt");
    console.log(`file deleted`);
}
else{
    console.log(`ERROR: file does not exist`);
}


console.log(`\nAsyncronously deleting file.........`);

fs.unlink("Output/3temp.txt", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`file deleted`);
    }
});