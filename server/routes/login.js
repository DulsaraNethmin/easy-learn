const express = require('express');
const Users=require('../models/Users');

const router=express.Router();

//post method
router.post('/',async(req,res)=>
{
    try
    {
       //console.log(req);        
        const user=await Users.findOne({uname:req.body.uname,password:req.body.password});
        console.log(user);
        if(user)
            {
                res.status(200).send({type:user.type,uname:user.uname});
            }
        else
            {
                res.status(200).send('wrong pw');
            }
    }
    catch(err)
    {
        res.status(400).send('bad req');
    }
});



module.exports=router;