const fs = require('fs');

console.log(`started reading.........`);

fs.readFile("Data/diary.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`file content-`);
        console.log(data);
    }
});

console.log(`finished reading.........`);