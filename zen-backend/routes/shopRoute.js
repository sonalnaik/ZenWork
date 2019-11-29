
var express=require("express");
var router=express.Router();
const Models = require("../models/shopSchema");


router.post('/addShop',(req,res,next)=>{
    console.log("req body",req.body);
    let reqBodyData= new Models.Shop({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        subUser:req.body.subUser

    });
    console.log(reqBodyData);
    reqBodyData.save((err,data)=>{
        if(err){
            res.status(500).json({
                success : false,
                message : "Problem while saving data.",
                error:err
             })
        }else{
            res.status(200).json({
                success : true,
                message : "Shop information saved sucessfully.",
             })
        }
    })
    });


    router.get('/allShops',(req,res,next)=>{
        
        Models.Shop.find({})
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