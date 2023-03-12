const mongoose=require('mongoose')
const Schema =mongoose.Schema

const bookSchema=new Schema({
    title:{
        type : String,
        required : true
    },

    author:{
        type : String,
        required : true
    },

    copies:{
        type : Number,
        required : true,
    },

    pages:{
        type : Number,
        required : true
    },

    language : {
        type : String,
        required : true
    },
    active:{
        type:Boolean,
        default:true,
    },
    bstatus:{
        type: String,
        enum:['available','unavailable'],
        default:'available'
    }
});

const Book=mongoose.model('Book',bookSchema);
module.exports=Book;