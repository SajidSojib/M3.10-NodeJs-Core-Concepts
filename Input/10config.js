require('dotenv').config();


const config = {
    app:{
        name: process.env.APP_NAME,
        version: process.env.APP_VERSION,
        port: process.env.PORT,
        env: process.env.NODE_ENV
    }
}

console.log(config.app);
module.exports = config;