const os = require('os');

console.log(`\npatform details`);
console.log(`-`.repeat(70));
console.log(`Platform: `, os.platform());
console.log(`Architecture: `, os.arch());
console.log(`OS type: `, os.type());
console.log(`OS release: `, os.release());
console.log(`OS version: `, os.version());
console.log(`Hostname: `, os.hostname());
console.log(`\n`);


const cpus = os.cpus();
// console.log(cpus);
console.log(`CPU Details`);
console.log(`-`.repeat(70));
console.log(`CPU Model: `, cpus[0].model);
console.log(`CPU Speed: `, cpus[0].speed);
console.log(`CPU Cores: `, cpus.length);
console.log(`\n`);


console.log(`Memory Details`);
console.log(`-`.repeat(70));
console.log(`Total Memory: `, os.totalmem()/1024/1024/1024);
console.log(`Free Memory: `, os.freemem()/1024/1024/1024);
console.log(`\n`);


const upTime = os.uptime();
console.log(`Uptime: ${Math.floor(upTime/86400)} days ${Math.floor((upTime)%86400/3600)} hours ${Math.floor((upTime)%3600/60)} minutes ${Math.floor(upTime%60)} seconds`);

