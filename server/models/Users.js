const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        Name:{type:String,required:true},
        uname:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        phonno:{type:String,required:true},
        password:{type:String,required:true},
        type:{type:string,required:true}
    },
    {collection:'users'}
    )



module.exports=mongoose.model('Users',userSchema);