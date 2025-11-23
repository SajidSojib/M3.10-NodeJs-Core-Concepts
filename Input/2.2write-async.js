const fs = require('fs');

console.log(`started writeing.........`);

const data = `I am learning write file in NodeJS file system\nAsyncronously!!!`;

fs.writeFile("Output/2.2test-async.txt", data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`finished writing.........`);
    }
});
