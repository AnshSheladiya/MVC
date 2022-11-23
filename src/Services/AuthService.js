const signupCollection = require("../Models/signup_details");
const { makeResponse, makeErrorResponse } = require("../helper/response");
const MSG = require("../helper/constent-msg");
const MongooseService = require("../Services/MongooseService");
const bcrypt=require("bcrypt");

class AuthService {
  constructor() {
    this.MongooseServiceInstance = new MongooseService(signupCollection);
  }
  async signup(reqBody) {
    try {
      let email = reqBody.email;
      let user = await this.MongooseServiceInstance.findOneByField({ email });
      if (user) {
        return makeResponse(
          MSG.GENERAL_MSG.FALSE,
          MSG.STATUS_CODE.BAD_REQUEST,
          MSG.GENERAL_MSG.DUPLICATE_EMAIL
        );
      }
      let userData = await this.MongooseServiceInstance.create(reqBody);
      userData.password = undefined;
      return makeResponse(
        MSG.GENERAL_MSG.TRUE,
        MSG.STATUS_CODE.OK,
        MSG.GENERAL_MSG.OK,
        userData
      );
    } catch (err) {
      console.log(err);
      return makeErrorResponse(err.message);
    }
  }

  async login(reqBody) {
    try {
      let email = reqBody.email;
      let userData = await this.MongooseServiceInstance.findOneByField({email});
        if(userData){
            let isMatched=await bcrypt.compare(reqBody.password,userData.password);
            if(isMatched){
                const token=await userData.generateAuthToken();             
                const result=JSON.parse(JSON.stringify(userData));
                result.token=token
                result.password=undefined
                return makeResponse(MSG.GENERAL_MSG.TRUE,MSG.STATUS_CODE.OK,MSG.GENERAL_MSG.LOGIN_SUCCESS,result)
            }else{
                return makeErrorResponse(MSG.GENERAL_MSG.FALSE,MSG.STATUS_CODE.BAD_REQUEST,MSG.GENERAL_MSG.WRONG_CREDENTIALS)
            }
        }else{
            return makeErrorResponse(MSG.GENERAL_MSG.FALSE,MSG.STATUS_CODE.BAD_REQUEST,MSG.GENERAL_MSG.WRONG_CREDENTIALS)
        }
    } catch (err) {
      console.log(err);
      return makeErrorResponse(err.message);
    }
  }

  async getAllUser(){
    try {
      let users=await this.MongooseServiceInstance.findAll();
      if(users){
        return (makeResponse(MSG.GENERAL_MSG.TRUE,MSG.STATUS_CODE.OK,MSG.GENERAL_MSG.FOUND_SUCCESS,users))
      } else{
        return (makeErrorResponse(MSG.GENERAL_MSG.FALSE,MSG.STATUS_CODE.NOT_FOUND,MSG.GENERAL_MSG.FOUND_UNSUCCESS))
      }
    } catch (err) {
      console.log(err)
      return makeErrorResponse(err.message)
    }
  }
}

module.exports = AuthService;
