const User = require("../models/user");
const jwt = require('jsonwebtoken');


// handle errors
// const handleErrors = (err) => {
//   console.log(err.message, err.code);
//   let errors = { email: '', password: '' };

//   // incorrect email
//   if (err.message === 'incorrect email') {
//     errors.email = 'That email is not registered';
//   }

//   // incorrect password
//   if (err.message === 'incorrect password') {
//     errors.password = 'That password is incorrect';
//   }

//   // duplicate email error
//   if (err.code === 11000) {
//     errors.email = 'that email is already registered';
//     return errors;
//   }

//   // validation errors
//   if (err.message.includes('user validation failed')) {
//     // console.log(err);
//     Object.values(err.errors).forEach(({ properties }) => {
//       // console.log(val);
//       // console.log(properties);
//       errors[properties.path] = properties.message;
//     });
//   }

//   return errors;
// }


const maxAge = 1 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'secret', {
    expiresIn: maxAge
  });
};

module.exports.signup_get = (req, res) => {
  res.render('signup');
}

exports.login_get = (req, res) => {
  res.render('login');
}

exports.signup_post = async (req, res) => {
  const { name,email, password,phone_number,gender} = req.body;

  try {
    const user = await User.create({ name,email, password,phone_number,gender });
    console.log(user);
    const token = createToken(user._id);
    res.send({token,user});
  }
  catch(err) {
    res.json("Failed");
  }
 
}



exports.login_post = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.json({token,user});
  } 
  catch (err) {
    res.json("Incorrect Email Or Password");
  }

}

// exports.logout_get = (req, res) => {
//   res.cookie('jwt', '', { maxAge: 1 });
//   res.redirect('/');
// }

exports.verifyjwt=(token) =>{
  const decoded =jwt.verify(token, "secret");
  return decoded.id;
}




