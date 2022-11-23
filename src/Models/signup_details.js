const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const singupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
})

//convert password into hashPassword
singupSchema.pre("save",async function(next){
    try {
        if(this.isModified("password")){
            this.password=await bcrypt.hash(this.password,10);
            next()
        }
    } catch (error) {
        console.log(error)
    }
})

//Generate JWT token
singupSchema.methods.generateAuthToken=async function (){
  try {
    const token=await jwt.sign({_id:this._id},process.env.JWT_SECERT);
    return token;
    return 
  } catch (err) {
    console.log(err)
    
  }
}

let signupCollection=mongoose.model("signup_details",singupSchema);
module.exports=signupCollection;