const path = require('path');
const dotEnv = require('dotenv');

const parsedEnv = dotEnv.config({ path: path.join(__dirname, '../.env.development') });

if (parsedEnv.error) {
	throw parsedEnv.error;
}

const config = {
	port: Number(process.env.PORT) || 3000,
	salt: process.env.SALT || 'djUnicode',
	host: process.env.HOST || '127.0.0.1',
	rateLimitWindowInterval: Number(process.env.RATE_LIMIT_WINDOW_INTERVAL),
	rateLimitAttempts: Number(process.env.RATE_LIMIT_ATTEMPTS),
};

module.exports = config;
