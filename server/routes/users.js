const express = require('express');
const Users =require('../models/Users');

const router =express.Router();

//post to save the user
router.post('/',async(req,res)=>
{
    console.log(req.body);
    try
    {
        const uname=await Users.findOne({uname:req.body.uname});
        const phonno=await Users.findOne({phonno:req.body.phonno});
        const email=await Users.findOne({email:req.body.email});
        if(uname)
            res.send('usernane has taken');
        if(phonno)
            res.send('phonno has taken');
        if(email)
            res.send('email has taken');
        const users=await Users.create(req.body);
        console.log(users);
        if(users)
            return res.status(201).send("userCreated");
        else
            return res.status(201).send("userNotCreated");
    }
    catch(err)
    {
        return res.status(400).send(err);
    }
}); 

// get
router.get('/',async(req,res)=>
{
    const data=await Users.find(req.query);
    res.status(200).json(data);
})


// get by id
router.get('/:id',async(req,res)=>
{
    console.log(req.query)
    const data=await Users.find(req.query);
    res.status(200).json(data);
})

// find and delete

router.delete('/',async(req,res)=>
{
    User.findOneAndDelete(req.query)
    res.status(201).json(`${req.query.name} is deleted`);
})

// update(put)

router.put('/:id',(req,res)=>
{
    console.log(req.params);
    res.status(200).json({msg:`successfully updated item no ${req.params.id}`, time:Date()});
})

module.exports=router;