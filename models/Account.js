const db = require('../config/dtbs');

const Account = {
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM accounts WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }
};

module.exports = Account;