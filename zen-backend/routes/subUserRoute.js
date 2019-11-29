
var express=require("express");
var router=express.Router();
const Models = require("../models/subUserSchema");

router.post('/addSubUser',(req,res,next)=>{
    console.log("req body",req.body);
    let reqBodyData= new Models.SubUser({
        name:req.body.name,
        email:req.body.email,

    });
    reqBodyData.save((err,data)=>{
        if(err){
            res.status(500).json({
                success : false,
                message : "Problem while saving shop.",
                error:err
             })
        }else{
            res.status(200).json({
                success : true,
                message : "Sub user information saved sucessfully.",
               
             })
           
        }
    })
    });


    router.get('/getSubUser',(req,res,next)=>{
        
        Models.SubUser.find({})
            .exec(function(err, data) {
                // handle err
                if(err){
                    res.status(500).json({
                        success : false,
                        error:err,
                    })
                }
                else{
                    res.status(200).json({
                        success : true,
                        data:data,
                    })
                    
                    }
           });
        });

        
    
module.exports=router;