const fs = require('fs');

// fs.writeFileSync("Output/2.3append-sync.log", "First-> Log started\n");
// fs.writeFileSync("Output/2.3append-sync.log", "Second-> first one is overwritten\n");

// fs.appendFileSync("Output/2.3append-sync.log", `Third-> ${new Date().toLocaleString()} User logged in\n`);

fs.appendFileSync("Output/2.3append-sync.log", `Fourth-> ${new Date().toLocaleString()} User logged out\n`);
fs.appendFileSync("Output/2.3append-sync.log", `Fourth-> 1st, 2nd, 3rd are commented and i can append new line. old ones will not be overwritten\n`);
