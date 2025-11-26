const bcrypt = require('bcryptjs');
const hashPassword = async (password) => bcrypt.hash(password, 10);
module.exports = { hashPassword };