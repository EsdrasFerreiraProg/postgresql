const express = require('express');
const router = express.Router();
require('dotenv').config();
const logger = require("./logger/logger.js");
const generator = require('generate-password');
const bcrypt = require('bcrypt');
const postgresConnection = require('./sql/queries.js');


router.get('/api/users/:id', async (req, res)=>{
    let register = "";
    let param = req.body.id;

    postgresConnection.runQueries(param).then(response=>{
        res.status(200).send({msg: response, status: 'success'});

    }).catch(err=>{res.status(500).send({msg: 'Um erro ocorreu ao tentar coletar os usuários: ' + err});})
    
})

router.get('/api/users/:key', async (req, res)=>{
    let register = "";
    const key = req.params.key;
    
})

router.post('/api/users', async (req, res)=>{
    const { v4: uuidv4 } = require('uuid');
    let uuidNumber = uuidv4();

    

});

router.put('/api/users', async (req, res) => {


    try{
        var {key, name, type} = req.body;

    }catch(err){
        logger.error("Error occured when destructuring the body objetct: " + err);
        res.status(500).send({message: "Error occured when destructuring the body object: " + err});
        return;
    }
   
    
});

router.delete('/api/users/delete/:key', async (req, res) => {
    const key = req.params.key;
   
});
const path = require('path');

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + "/pages/example.html"));
});

router.get('/css/example.css', (req,res)=>{
    res.sendFile(path.join(__dirname + "/css/example.css"));
});

module.exports = router;
