const express =require('express');
const Community =require('../models/Community');
const router=express.Router();


//console.log('hello');
router.get('/',async(req,res)=>
{
    console.log(req.params);
    const community = await Community.find();
    res.send(community);
});

router.get('/:id',async(req,res)=>
{
    console.log(req.params);
    const community = await Community.findById(req.params.id);
    res.send(community);
});

router.post('/',async(req,res)=>
{
    try
    {
        console.log(req.body);
        const community=await Community.create(req.body)
        if(community)
            res.status(201).send('posted');
        else
            res.status(400).send('not posted');
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})



router.put('/:id',async(req,res)=>
{
    try
    {
       console.log(req.params);
        console.log("hello");
        const community=await Community.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});

        if(community)
            return res.status(201).send("recorded");
        else
            return res.status(201).send("notRecorded");
    }
    catch(err)
    {
        //alert('error');
        return res.status(400).send({err});
    }
})


module.exports=router;