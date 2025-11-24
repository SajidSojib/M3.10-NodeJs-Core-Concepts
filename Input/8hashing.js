//* MD5 -> not secure
//* SHA256 -> secure
//* SHA512 -> very secure

const crypto = require('crypto');

const md5Hashe = crypto.createHash('md5').update('password123').digest('hex');
const sha256Hashe = crypto.createHash('sha256').update('password123').digest('hex');
const sha512Hashe = crypto.createHash('sha512').update('password123').digest('hex');

console.log(`MD: password123 -> ${md5Hashe}`);
console.log(`SHA256: password123 -> ${sha256Hashe}`);
console.log(`SHA512: password123 -> ${sha512Hashe}`);
