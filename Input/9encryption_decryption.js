const crypto = require('crypto');

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const algorithm = 'aes-256-cbc';

const encript = (text) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');

    return {
        iv: iv.toString('hex'),
        content: encrypted
    }
}

const decript = (hash) => {
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(hash.iv, 'hex'));
    let decrypted = decipher.update(hash.content, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
}

const sensitiveData = 'password123';
const encrypted = encript(sensitiveData);
const decrypted = decript(encrypted);

console.log(`Original Data: `, sensitiveData);
console.log(`Encrypted: ${encrypted.content}`);
console.log(`Decrypted: ${decrypted}`);