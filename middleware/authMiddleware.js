const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { verifyjwt } = require('../controllers/authController');

exports.requireAuth = (req, res, next) => {
  const token = req.query.token;
  if (token) {
    jwt.verify(token, 'secret', (err, decodedToken) => {
      if (err) {
        res.json("unsuccessfull");
      } else {
        next();
      }
    });
  } else {
   
    res.json("unsuccessfull");
  }
};

exports.restrict_admin=(req,res,next)=>{
  const userId=verifyjwt(req.query.token);
  User.findById(userId)
  .then((result)=>{
    if(result.role!='admin'){
          res.json("Unauthorised");
  }
  else{
    next();
  }
  })
}

exports.restrict_lecturer=(req,res,next)=>{
  const userId=verifyjwt(req.query.token);
  User.findById(userId)
  .then((result)=>{
      if(result.role!='lecturer'){
          res.json("Unauthorised");
      }
      else{
        next();
      }
  })
}

exports.restrict_student=(req,res,next)=>{
  const userId=verifyjwt(req.query.token);
  User.findById(userId)
  .then((result)=>{
      if(result.role!='student'){
          res.json("Unauthorised");
      }
      else{
        next();
      }
  })
}



