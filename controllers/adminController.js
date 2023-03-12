const User=require('../models/user');
const Book=require('../models/books');

// exports.user_add=(req,res)=>{
//   res.render('admin/addUsers',{title:'Enter User Details'});
// }

// exports.books_create=(req,res)=>{
//   res.render('admin/addBooks',{title:'Enter Book Details'});
// }

exports.users_get= (req,res)=>{
  console.log("enter")
    User.find()
    .then((result)=>{
      res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.users_post= (req,res)=>{
    const user= new User(req.body);
    user.save()
        .then((result)=>{
            res.json('succesfull');
        })
        .catch((err)=>{
            console.log(err);
        })
}


exports.books_post= (req,res)=>{
    const book= new Book(req.body);
      book.save()
          .then((result)=>{
            res.json('succesfull');
          })
          .catch((err)=>{
              console.log(err);
          })
}

exports.books_get= (req,res)=>{
    Book.find()
    .then((result)=>{
        // res.render('admin/admin-books',{title:'List Of Books Admin', books:result})
        res.setHeader('Content-Type','application/json');
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}


// exports.book_get_id=(req,res)=>{
//   const bookId=req.query.bid;
//     Book.findById(bookId)
//     .then((result)=>{
//       var arr = [];
//       arr.push(result);
//       res.render('admin/admin-books',{title:'List Of Books Admin', books:arr})
//     })
//     .catch((err)=>{
//       console.log(err);
//       res.render('admin/admin-books',{title:'Books not found',books:[]})
//   })
// }

exports.book_delete_id= (req,res)=>{
  const bookId=req.query.bid;
  Book.findByIdAndRemove(bookId,(err,result)=>{
    if(err)
    console.log(err);
    else{
    res.json("succesfull");
    }
  })
}

exports.user_delete_id= (req,res)=>{
  const userId=req.query.uid;
  User.findByIdAndRemove(userId,(err,result)=>{
    if(err)
    console.log(err);
    else{
          res.json("succesfull")
    }
  })
}

exports.user_update= (req,res)=>{
  const userId=req.query.uid;
 const name=req.query.name;
 const email=req.query.email;
 const phone_number=req.query.phone_number;
 const gender=req.query.gender;
 const role=req.query.role;

User.findByIdAndUpdate(userId, {name,email,phone_number,gender,role}, { useFindAndModify: false})
    .then((data) => {
        if(!data){
          res.json({ message : `Cannot Update user!`})
        }else{
          // res.redirect('/admin/users');
          res.json("success")
        }
    })
    .catch(err =>{
        res.status(500).send({err})
    })
}


exports.book_update= (req,res)=>{
  const bookId=req.query.bid;
  const title=req.query.title;
  const author=req.query.author;
  const copies=req.query.copies;
  const pages=req.query.pages;
  const language = req.query.language;

  Book.findByIdAndUpdate(bookId, {title,author,copies,pages,language}, { useFindAndModify: false})
    .then(data => {
        if(!data){
            res.json({ message : `Cannot Update user!`})
        }else{
          res.json("success")
        }
    })
    .catch(err =>{
        res.json(err);
    })
}

exports.view_updated_users = (req, res) =>{
  const userId=req.query.uid;
  User.findById(userId)
  .then((result)=>{
    res.json(result);
  })
  .catch((err)=>{
    res.json(err);
})
}

exports.view_updated_books = (req, res) =>{
  const bookId=req.query.bid;
  Book.findById(bookId)
  .then((result)=>{
    res.json(result)
  })
  .catch((err)=>{
    console.log(err);
})
}



