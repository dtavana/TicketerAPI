var sub = require('./subscribe');
var pub = require('./publish');
const utils = require('../utils/utils');
const fetch = require('node-fetch');

require('dotenv').config();

module.exports = {
    getGuilds: async(req, res) => {
        let userid = req.body.userId;
        let key = utils.generateKey();
        if(userid) {
            let key = utils.generateKey();
            let data = {
                "userId": userid,
                "key": key
            };

        }
        else {
            res.status(400).send({msg: "Invalid type"});
        }
    },
    getTicketContent: async(req, res) => {
        var data;
        if(req.body.status == "completed") {
            data = {
                "userId": req.body.buyer_id,
                "added": true,
                "paymentId": req.body.txn_id,
            };
        }
        else {
            data = {
                "userId": req.body.buyer_id,
                "added": false,
                "paymentId": req.body.txn_id,
            };
        }
        await redis.publish(process.env.DONATE_CHANNEL, JSON.stringify(data));
        res.status(200).send({msg: "Done"})
    }
}