const Mapping=require('../models/mapping');

exports.approve_get=(req,res)=>{
    Mapping.find()
    .populate('books')
    .populate('user')
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.approve_post=(req,res)=>{
    Mapping.findOne({'books':req.query.bid,'user':req.query.uid})
    .populate('books')
    .then((result)=>{
        if(result.books.copies>0){
        result.books.copies-=1;
        result.books.save();
        result.status='approved';
        result.save();
        res.json('successfull')
        }
        else{
            res.send("Wait for copies of books to be returned")
        }
    })
    
}


exports.reject_post=(req,res)=>{
    Mapping.deleteOne({'books':req.query.bid,'user':req.query.uid})
    .then((result)=>{
        res.json("successfull");
    })

}


