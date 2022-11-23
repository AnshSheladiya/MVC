const express=require('express');
const router=express.Router();
const authControllers=require("../Controllers/auth.controller")

//@route    POST /auth/
//@desc     get index page
//@access   PRIVATE
router.get("/", authControllers.getIndexPage);

//@route POST /auth/signup
//@desc  signup User
//@access PUBLIC
router.post("/signup",authControllers.signup)


//@route POST /auth/login
//@desc  login User
//@access PUBLIC
router.post("/login",authControllers.login)


//@route GET /auth/getalluser
//@desc  Get All User
//@access PUBLIC
router.get("/getalluser",authControllers.getAllUser)

module.exports=router;

