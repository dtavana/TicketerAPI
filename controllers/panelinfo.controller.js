var sub = require('./subscribe');
var pub = require('./publish');
const utils = require('../utils/utils');
const fetch = require('node-fetch');

const MANAGE_GUILDS = 0x00000020

require('dotenv').config();

module.exports = {
    getChannels: async (req, res) => {
        let guildid = req.query.guildId;
        if (guildid) {
            let data = await fetch(process.env.DISCORD_API_URL + '/guilds/' + guildid + '/channels', {
                method: 'get',
                headers: { 'Authorization': process.env.DISCORD_BOT_TOKEN_STRING }
            });
            data = await data.json();
            res.status(200).send({ channels: data })

        }
        else {
            res.status(400).send({ msg: "Invalid guildId entered" });
        }
    },
    getGuilds: async (req, res) => {
        let filteredGuilds = req.user.guilds.filter(guild => (guild.permissions & MANAGE_GUILDS) == MANAGE_GUILDS)
        res.status(200).send({ guilds: filteredGuilds })
    },
    getRoles: async (req, res) => {
        let guildid = req.body.guildId;
        if (guildid) {
            let data = await fetch(process.env.DISCORD_API_URL + '/guilds/' + guildid + '/roles', {
                method: 'get',
                headers: { 'Authorization': process.env.DISCORD_BOT_TOKEN_STRING }
            });
            data = await data.json();
            res.status(200).send({ roles: data })

        }
        else {
            res.status(400).send({ msg: "Invalid guildId entered" });
        }

    },
    getTicketContent: async (req, res) => {
        let channelid = req.body.channelId;
        if (channelid) {
            let data = await fetch(process.env.DISCORD_API_URL + '/channels/' + channelid + '/messages?limit=100', {
                method: 'get',
                headers: { 'Authorization': process.env.DISCORD_BOT_TOKEN_STRING }
            });
            data = await data.json();
            res.status(200).send({ messages: data })

        }
        else {
            res.status(400).send({ msg: "Invalid channelId entered" });
        }
    }
}