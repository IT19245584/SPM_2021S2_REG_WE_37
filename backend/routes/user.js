const systemReg = require('../models/systemReg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.route('/register').post((req, res, next)=>{
    bcrypt.hash(req.body.ForgotLoginCPassword, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

         let systemreg = new systemReg({
            username : req.body.UserName,
            type : 'Admin',
            password : hashedPass
        })
        systemreg.save()
        .then(systemreg =>{
            res.json({
                message:'User Added'
            })
        }).catch(error=>{
            res.json({
                message:'User Name is Already Used'
            })
        })

    })
});

router.route('/login').post((req, res, next) => {
    var username = req.body.userName;
    var password = req.body.password;

    systemReg.findOne({$or: [{username:username}]})
    .then(systemreg =>{
        if(systemreg){
                bcrypt.compare(password, systemreg.password, function(err, result){
                    if(err){
                        res.json({
                            error:err
                        })
                    }
                    if(result){
                        res.json({
                            message: true
                        })      
                    }else{
                        console.log(err);
                         res.json({
                            message: false,
                            
                        })    
                    }
                })

        }else{
            res.json({
                message: false
            })
        }
    })
});


router.route('/resetPassword/:username').put((req, res)=>{
    let username = req.params.username;
       
       bcrypt.hash(req.body.password, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
          }
           const password = hashedPass;
           const updatePass={
               password
           }
       const update1 =  systemReg.findOneAndUpdate({username:username},updatePass).then(() => {
                    res.status(200).send({status :"Updated password"});
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with Updating Data",error: err.message});
        });
          
    })
});  

module.exports = router;