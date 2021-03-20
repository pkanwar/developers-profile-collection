const express = require('express');
const { devProf } = require('../data/devData');
const dataProcess = require('./dataProcess');
const axios = require('axios');

let router = express.Router();

router.get('/',(req,res)=>{

    const devList = [];

    if(Object.entries(devProf).length === 0){
        res.status(400).send({error : 'developers list is empty'});
    }else{
        Object.keys(devProf).forEach((key)=>{
            devList.push({id : devProf[key].id , avatar_url : devProf[key].avatar_url });
        })
        res.send(devList);
    }
})

router.post('/', async (req,res)=>{
    console.log('req : ' + req.body);
    if(req.body.github_id){
        const github_id = req.body.github_id;
        const gitAPI = 'https://api.github.com/users/' + github_id;

        const response = await axios.get(gitAPI);
        if(response.status === 404)
        {
            res.status(404).send({error : 'github ID not found, please enter a valid github id'});
        }
            
        const reqData = req.body;
        const gitData = response.data;
        devProf[github_id] = await dataProcess.getDevData(reqData,gitData);
        
        res.status(201).send({id : github_id});
        
    } else {
        res.status(400).send({error: 'invalid request body (github_id is mandatory)'})
    }
})

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    let devBody = devProf[id];
    if(devBody){
        return res.send(devBody);
    }else{
        return res.status(404).send({error : 'developer not found with this id'});
    }
})


module.exports = router;