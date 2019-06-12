var redis = require('./publish');
var pg = require('./postgres');
require('dotenv').config();

module.exports = {
    handleVote: async(req, res) => {
        if(req.body.type == "upvote") {
            let data = {
                "userId": req.body.user,
                "isWeekend": req.body.isWeekend,
            };
            await redis.publish(process.env.VOTE_CHANNEL, JSON.stringify(data));
            res.status(200).send({msg: "Done"})
        }
        else {
            res.status(400).send({msg: "Invalid type"});
        }
    },
    handlePremium: async(req, res) => {
        console.log("got here");
        let data;
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