require('dotenv').config();

module.exports= {
    ensureAuthenticated: function(req, res, next) => {
        if (req.isAuthenticated()) { 
          return next(); 
        }
        else {
          res.redirect('/api/auth/discord');
        }
        
    },
    checkSecret: function(req, res, next) => {
      if(req.headers.authorization == process.env.SECRET) {
        next();
      }
      else {
        res.end();
      }
    }
}
