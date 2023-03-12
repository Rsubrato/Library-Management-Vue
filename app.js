const Book=require('./models/books');
const User=require('./models/user')
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes');
const lecturerRoutes = require('./routes/lecturerRoutes');
const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const jwt= require("jsonwebtoken");



const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.set('view engine', 'ejs');

const dbURI="mongodb+srv://subrato1:asdfghjkl@sample.rih5xc5.mongodb.net/node?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result)=>{
  app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
  })
  .catch((err) => console.log(err));

mongoose.set('useFindAndModify', false);





app.get('/',(req,res)=>{
  Book.find()
  .then((result)=>{
      res.json(result);
  })
  .catch((err)=>{
      console.log(err);
  })
});

app.get('/user', (req, res, next) => {
  console.log(req.query)
  if(Object.keys(req.query).length === 0)
    res.json('no token')
 else{
    const decoded = jwt.verify(req.query.token, "secret"); 
    User.findById(decoded.id)
    .then(result=>{
      res.json(result);
    })
  }

  })


app.use(authRoutes);
app.use('/admin',adminRoutes);
app.use('/students',studentRoutes);
app.use('/lecturer',lecturerRoutes);
