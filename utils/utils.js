require('dotenv').config();
const uuidv1 = require('uuid/v1');

module.exports= {
    generateKey: () => {
      let key = uuidv1();
      return key;
    },
    ensureAuthenticated: function(req, res, next) {
      req.session.body = req.body;
      if (req.isAuthenticated()) { 
          return next(); 
        }
        else {
          res.redirect('/api/auth/discord');
        }
        
    },
    checkSecret: function(req, res, next) {
      if(req.headers.authorization == process.env.SECRET) {
        next();
      }
      else {
        res.status(400).end("msg: Invalid secret");
      }
    }
}
