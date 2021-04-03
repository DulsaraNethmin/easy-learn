const mongoose=require('mongoose');
const communitySchema=new mongoose.Schema(
    {
        
        date:String,
        name:{type:String,required:true},
        tags:[],
        post:{type:String,required:true},
        reply:[Object]
        
    },
        {collection:'community'}
    )


    module.exports=mongoose.model('Community',communitySchema);