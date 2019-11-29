var mongoose=require("mongoose");
var Schema= mongoose.Schema;

const subUserSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default:Date.now
    }
});

const SubUser=mongoose.model("Subuser",subUserSchema);

module.exports={
    SubUser:SubUser
}