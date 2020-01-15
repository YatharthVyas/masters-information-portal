const bcrypt = require('bcrypt');
const { salt } = require('../config/index');

exports.encryptPassword = async (ptPassword) => {
	const hashedPassword = await bcrypt.hash(ptPassword, salt);
	return hashedPassword;
};

exports.comparePassword = async (ptPassword, hashedPassword) => {
	const match = await bcrypt.compare(ptPassword, hashedPassword);
	return match;
};
