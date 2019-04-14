require('dotenv').config();
const initializationOptions = {
    error(err,e) {
        if(e.cn) console.log('connection error',error.message);
        if(e.query){
            console.log('query wahala',e.query);
            if(e.params) console.log('query error',e.params);
        }
        if(e.ctx) console.log('transaction error',e.ctx);

    }
}
const pgp = require('pg-promise')(initializationOptions);
const db = pgp({
    host: process.env.PG_HOST,
    port: 5432,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
});

function init() {
    db.connect()
        .then(obj=>{
            obj.done();
        })
        .catch(err=>{
        }) 
    return db;
}

module.exports = init();