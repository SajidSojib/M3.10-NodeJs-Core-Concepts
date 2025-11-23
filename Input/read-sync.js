const fs = require('fs');

console.log(`started reading.........`);

try {
    const data = fs.readFileSync(
      "Data/diary.txt",
      "utf-8"
    );
    console.log(data);
} catch (error) {
    console.error(error.massage)
}

console.log(`finished reading.........`);