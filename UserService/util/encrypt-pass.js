const bcrypt = require('bcrypt');
const saltRounds = 10;
function encryptPass(pass) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(pass, salt);
    return hash;
}
module.exports = encryptPass;