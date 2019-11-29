var mongoose=require("mongoose");
var Schema= mongoose.Schema;

var AddressSchema = mongoose.Schema({ 
    plotNo: {
        type:String,
        required:true
    },
    locality: {
        type:String,
        required:true
    },
    pincode: {
        type:String,
        required:true
    }
});

var SubUserSchema = new Schema({ 
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
 });

const shopSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:[AddressSchema],
        required:true
    },
    subUser:{
        type:[SubUserSchema],
        required:true
    },
    
    created:{
        type:Date,
        default:Date.now
    }
});

const Shop=mongoose.model("Shop",shopSchema);

module.exports={
    Shop:Shop
}

// {
//     "name":"cmr",
//     "email":"cmr@hls.com",
//     "address":[
//     {"plotNo":"6-234",
//     "locality":"Kukatpally",
//     "pincode":"5000087"
//     },
//     {"plotNo":"567-6",
//     "locality":"Dilshuknagar",
//     "pincode":"500081"
//     }
//     ],
//     "subUser": [
//     {
//     "name": "David",
//     "email": "david@gmail.com"
//     },
//     {
//     "name": "Daniel",
//     "email": "daniel@gmail.com"
//     }
//     ]
//     }
    