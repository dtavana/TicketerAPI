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
            res.status(400).send({msg: "Invalid userId entered"});
        }
    },
    getTicketContent: async(req, res) => {
        let channelid = req.body.channelId;
        if(channelid) {
            let data = await fetch(process.env.DISCORD_API_URL + '/channels/' + channelid + '/messages?limit=100', {
                method: 'get',
                headers: { 'Authorization': process.env.DISCORD_BOT_TOKEN_STRING }
            });
            data = await data.json();
            console.log(data)
            res.status(200).send({messages: data})

        }
        else {
            res.status(400).send({msg: "Invalid channelId entered"});
        }
    }
}