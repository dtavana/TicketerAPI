var redis = require('./redis');
var redis = require('./postgres');

module.exports = {
    test: (req,res) => {
        return res.send(200);
    }
}