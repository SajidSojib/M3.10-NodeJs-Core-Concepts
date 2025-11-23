const fs = require('fs');

console.log(`started writing.........`);

try {
    const data = `I am learning write file in NodeJS file system\nSyncronously!!!`;
    fs.writeFileSync(
      "Output/2.1test-sync.txt",
      data
    );
} catch (error) {
    console.error(error.massage)
}

console.log(`finished writing.........`);