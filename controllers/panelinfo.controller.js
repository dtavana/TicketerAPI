var sub = require('./subscribe');
var pub = require('./publish');
const utils = require('../utils/utils');
const fetch = require('node-fetch');

const MANAGE_GUILDS = 0x00000020

require('dotenv').config();

module.exports = {
    getGuilds: async(req, res) => {
        let userid = req.body.userId;
        if(userid) {
            let filteredGuilds = req.user.guilds.filter(guild => (guild.permissions & MANAGE_GUILDS) == MANAGE_GUILDS)
            res.status(200).send({guilds: filteredGuilds})

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