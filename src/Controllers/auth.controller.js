const { makeErrorResponse } = require("../helper/response");
const AuthService=require("../Services/AuthService");
const AuthServiceInstance=new AuthService();

const getIndexPage= (req, res) => {
    res.send("<h1>This is index page ....<h1>")
    console.log("This is index page");
}

const signup=async(req,res)=>{
    try {
        let result = await AuthServiceInstance.signup( req.body );
        res.send(result)
    } catch (error) {
        console.log(err);
        res.send( makeErrorResponse(err.message) );
    }
}

const login=async(req,res)=>{
    try {
        let result=await AuthServiceInstance.login(req.body);
        res.send(result)
    } catch (error) {
        console.log(error);
        res.send(makeErrorResponse(err.message))
    }
}

const getAllUser=async(req,res)=>{
    try {
        let result=await AuthServiceInstance.getAllUser();
        res.send(result)
    } catch (err) {
        console.log(err);
        res.send(makeErrorResponse(err.message))
    }
}
module.exports={getIndexPage,signup,login,getAllUser}