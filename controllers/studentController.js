const Book=require('../models/books');
const Mapping=require('../models/mapping');
const { verifyjwt } = require('./authController');


exports.student_books_get=(req,res)=>{
    const userId=verifyjwt(req.query.token);
    Book.find()
    .then((result)=>{
        for(var i=0;i<result.length;i++){
            result[i].active=true;
            result[i].save();
        }
    })
    .then(()=>{
        Mapping.find({user:userId})
        .populate('books')
        .then((result)=>{
            for(var i=0;i<result.length;i++){
                if(result[i].status=='approved')
                    result[i].books.active=false;
                else if(result[i].status=='pending')
                    result[i].books.active=true;

                result[i].books.save();
                
            }
        })
        setTimeout(()=>{
        Book.find()
            .then((result)=>{
                res.json(result);
            })
            .catch((err)=>{
                console.log(err);
            })}
            , 1000);
    })
}

exports.student_post_request=(req,res)=>{
    const userId=verifyjwt(req.query.token);  
    Mapping.findOne({books:req.query.bid,user:userId})
    .then((result)=>{
        if(!result)
        Mapping.create({
        books: req.query.bid,
        user:userId ,
        });
    })
    res.json("success");
}


exports.student_post_return=(req,res)=>{
    // const token = req.cookies.jwt;
    const userId=verifyjwt(req.query.token); 
    const bookId=req.query.bid;
    Mapping.findOne({books:bookId,user:userId})
    .populate('books')
    .then(result=>{
        result.books.copies+=1;
        result.books.save();
        Mapping.findOneAndRemove({books:bookId,user:userId},(err,result)=>{
            if(err)
            console.log(err);
            else{
                res.json('success');
            }
        })
    })
    
   
}

