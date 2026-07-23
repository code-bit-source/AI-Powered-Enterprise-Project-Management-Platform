const express = require("express");
const jwt = require("jsonwebtoken");


const generateToken = (id) =>{
    try{ 

        if(!id){
            console.log("user id is not provided");
        }
        
        return jwt.sign({id}, process.env.JWT_SECRET);
    }catch(err){
        console.log('error in generating token', err);
    } 
}

module.exports = generateToken;