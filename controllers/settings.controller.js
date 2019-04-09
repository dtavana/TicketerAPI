var redis = require('./redis');
var pg = require('./postgres');

module.exports = {
    getAllSettings: async(req, res) => {
        let guildid = req.body.guildid;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        
        let settings = await redis.hgetall(guildid)
        if(settings === null || settings.length === 0) {
            return res.status(400).json({"ERROR": `No settings found for guildid: '${guildid}'`})
        }
        return res.status(200).send(settings);
    },
    setPrefix: async(req, res) => {
        let guildid = req.body.guildid;
        let prefix = req.body.prefix;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(prefix === undefined) {
            return res.status(400).json({"ERROR": `No desired prefix in body`})
        }
        let result = await redis.hset(guildid, "prefix", prefix)
        return res.status(200).json({"SUCCESS": `Prefix has been set to '${prefix}'`});
    },
    setLogChannel: async(req, res) => {
        let guildid = req.body.guildid;
        let logchannel = req.body.logchannel;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(prefix === undefined) {
            return res.status(400).json({"ERROR": `No desired logchannel in body`})
        }
        let result = await redis.hset(guildid, "logchannel", logchannel)
        return res.status(200).json({"SUCCESS": `Log channel has been set to '${logchannel}'`});
    },
    setTranscriptChannel: async(req, res) => {
        let guildid = req.body.guildid;
        let transcriptchannel = req.body.transcriptchannel;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(transcriptchannel === undefined) {
            return res.status(400).json({"ERROR": `No desired transcriptchannel in body`})
        }
        let result = await redis.hset(guildid, "transcriptchannel", transcriptchannel)
        return res.status(200).json({"SUCCESS": `Transcript channel has been set to '${transcriptchannel}'`});
    },
    setTicketChannel: async(req, res) => {
        let guildid = req.body.guildid;
        let ticketchannel = req.body.ticketchannel;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(ticketchannel === undefined) {
            return res.status(400).json({"ERROR": `No desired ticketchannel in body`})
        }
        let result = await redis.hset(guildid, "ticketchannel", ticketchannel)
        return res.status(200).json({"SUCCESS": `Ticket channel has been set to '${ticketchannel}'`});
    },
    setTicketCategory: async(req, res) => {
        let guildid = req.body.guildid;
        let ticketcategory = req.body.ticketcategory;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(ticketcategory === undefined) {
            return res.status(400).json({"ERROR": `No desired ticketcategory in body`})
        }
        let result = await redis.hset(guildid, "ticketcategory", ticketcategory)
        return res.status(200).json({"SUCCESS": `Ticket category has been set to '${ticketcategory}'`});
    },
    setTicketPrefix: async(req, res) => {
        let guildid = req.body.guildid;
        let ticketprefix = req.body.ticketprefix;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(ticketprefix === undefined) {
            return res.status(400).json({"ERROR": `No desired ticketprefix in body`})
        }
        let result = await redis.hset(guildid, "ticketprefix", ticketprefix)
        return res.status(200).json({"SUCCESS": `Ticket prefix has been set to '${ticketprefix}'`});
    },
    setAdminRole: async(req, res) => {
        let guildid = req.body.guildid;
        let adminrole = req.body.adminrole;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(adminrole === undefined) {
            return res.status(400).json({"ERROR": `No desired adminrole in body`})
        }
        let result = await redis.hset(guildid, "adminrole", adminrole)
        return res.status(200).json({"SUCCESS": `Admin role has been set to '${adminrole}'`});
    },
    setTicketCount: async(req, res) => {
        let guildid = req.body.guildid;
        let ticketcount = req.body.ticketcount;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(ticketcount === undefined) {
            return res.status(400).json({"ERROR": `No desired ticketcount in body`})
        }
        let result = await redis.hset(guildid, "ticketcount", ticketcount)
        return res.status(200).json({"SUCCESS": `Ticket count has been set to '${ticketcount}'`});
    },
    setWelcomeMessage: async(req, res) => {
        let guildid = req.body.guildid;
        let welcomemessage = req.body.welcomemessage;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(welcomemessage === undefined) {
            return res.status(400).json({"ERROR": `No desired welcomemessage in body`})
        }
        let result = await redis.hset(guildid, "welcomemessage", welcomemessage)
        return res.status(200).json({"SUCCESS": `Welcome message has been set to '${welcomemessage}'`});
    },
    setTranscripts: async(req, res) => {
        let guildid = req.body.guildid;
        let transcripts = req.body.transcripts;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(transcripts === undefined) {
            return res.status(400).json({"ERROR": `No desired transcripts in body`})
        }
        let result = await redis.hset(guildid, "transcripts", transcripts)
        return res.status(200).json({"SUCCESS": `Transcripts has been set to '${transcripts}'`});
    },
    setCleanNew: async(req, res) => {
        let guildid = req.body.guildid;
        let cleannew = req.body.cleannew;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(cleannew === undefined) {
            return res.status(400).json({"ERROR": `No desired cleannew in body`})
        }
        let result = await redis.hset(guildid, "cleannew", cleannew)
        return res.status(200).json({"SUCCESS": `Clean New Inovcations has been set to '${cleannew}'`});
    },
    setCleanAll: async(req, res) => {
        let guildid = req.body.guildid;
        let cleanall = req.body.cleanall;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(cleanall === undefined) {
            return res.status(400).json({"ERROR": `No desired cleanall in body`})
        }
        let result = await redis.hset(guildid, "cleanall", cleanall)
        return res.status(200).json({"SUCCESS": `Clean All Inovcations has been set to '${cleanall}'`});
    },
    setSteamAuth: async(req, res) => {
        let guildid = req.body.guildid;
        let steamauth = req.body.steamauth;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(steamauth === undefined) {
            return res.status(400).json({"ERROR": `No desired steamauth in body`})
        }
        let result = await redis.hset(guildid, "steamauth", steamauth)
        return res.status(200).json({"SUCCESS": `Steam Authentication has been set to '${cleanall}'`});
    },
    setAdminClose: async(req, res) => {
        let guildid = req.body.guildid;
        let adminclose = req.body.adminclose;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(adminclose === undefined) {
            return res.status(400).json({"ERROR": `No desired adminclose in body`})
        }
        let result = await redis.hset(guildid, "adminclose", adminclose)
        return res.status(200).json({"SUCCESS": `Admin Only Close has been set to '${adminclose}'`});
    },
    setDMOnJoin: async(req, res) => {
        let guildid = req.body.guildid;
        let dmonjoin = req.body.dmonjoin;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(dmonjoin === undefined) {
            return res.status(400).json({"ERROR": `No desired dmonjoin in body`})
        }
        let result = await redis.hset(guildid, "dmonjoin", dmonjoin)
        return res.status(200).json({"SUCCESS": `DM On Join has been set to '${dmonjoin}'`});
    },
    setEnforceSubject: async(req, res) => {
        let guildid = req.body.guildid;
        let enforcesubject = req.body.enforcesubject;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(enforcesubject === undefined) {
            return res.status(400).json({"ERROR": `No desired enforcesubject in body`})
        }
        let result = await redis.hset(guildid, "enforcesubject", enforcesubject)
        return res.status(200).json({"SUCCESS": `Enforce Subject has been set to '${enforcesubject}'`});
    },
    setTicketOnJoin: async(req, res) => {
        let guildid = req.body.guildid;
        let ticketonjoin = req.body.ticketonjoin;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(ticketonjoin === undefined) {
            return res.status(400).json({"ERROR": `No desired ticketonjoin in body`})
        }
        let result = await redis.hset(guildid, "ticketonjoin", ticketonjoin)
        return res.status(200).json({"SUCCESS": `Ticket On Join has been set to '${ticketonjoin}'`});
    },
    setNewMemberWelcomeMessage: async(req, res) => {
        let guildid = req.body.guildid;
        let newmemberwelcomemessage = req.body.newmemberwelcomemessage;
        if(guildid === undefined) {
            return res.status(400).json({"ERROR": `No guildid in body`})
        }
        if(newmemberwelcomemessage === undefined) {
            return res.status(400).json({"ERROR": `No desired newmemberwelcomemessage in body`})
        }
        let result = await redis.hset(guildid, "newmemberwelcomemessage", newmemberwelcomemessage)
        return res.status(200).json({"SUCCESS": `New Member Welcome Message has been set to '${newmemberwelcomemessage}'`});
    }
}