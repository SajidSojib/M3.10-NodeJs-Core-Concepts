const fs = require('fs');

const data = `Asyncronously!!!  Started writting at ${new Date().toLocaleString()}\n`;

// fs.appendFile("Output/2.4append-async.log", data, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(`finished writing.........`);
//     }
// });

fs.appendFile("Output/2.4append-async.log", `This is second append. first one commented\n`, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`finished writing.........`);
    }
});