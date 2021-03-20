const { devProf } = require('../data/devData');
const axios = require('axios');

async function getRepoData(gitRepoUrl){
    const repoList = [];
    
    const response = await axios.get(gitRepoUrl);
       
    const repoData = response.data;
        
    repoData.forEach((repo)=>{
        console.log('repo.name : ' + repo.name);
        console.log('repo.html_url : ' + repo.html_url);
        repoList.push({name : repo.name, html_url : repo.html_url, description : repo.description, updated_at : repo.updated_at });
    })
    return repoList;        
}


async function getDevData(reqData,gitData){

    const devProfData = {};

    devProfData['github_id'] = reqData.github_id;

    if(reqData.linkedin_id){
        devProfData['linkedin_id'] =  reqData.linkedin_id;
    }else{
        devProfData['linkedin_id'] =  null;
    }
    if(reqData.codechef_id){
        devProfData['codechef_id'] =  reqData.codechef_id;
    }else{
        devProfData['codechef_id'] =  null;
    }
    if(reqData.hackerrank_id){
        devProfData['hackerrank_id'] =  reqData.hackerrank_id;
    }else{
        devProfData['hackerrank_id'] =  null;
    }
    if(reqData.twitter_id){
        devProfData['twitter_id'] =  reqData.twitter_id;
    }else{
        devProfData['twitter_id'] =  null;
    }
    if(reqData.medium_id){
        devProfData['medium_id'] =  reqData.medium_id;
    }else{
        devProfData['medium_id'] =  null;
    }
    if(gitData.name){
        devProfData['name'] =  gitData.name;
    }else{
        devProfData['name'] =  null;
    }
    if(gitData.id){
        devProfData['id'] =  gitData.id;
    }else{
        devProfData['id'] =  null;
    }
    if(gitData.avatar_url){
        devProfData['avatar_url'] =  gitData.avatar_url;
    }else{
        devProfData['avatar_url'] =  null;
    }
    if(gitData.blog){
        devProfData['blog'] =  gitData.blog;
    }else{
        devProfData['blog'] =  null;
    }
    if(gitData.bio){
        devProfData['bio'] =  gitData.bio;
    }else{
        devProfData['bio'] =  null;
    }
    if(gitData.email){
        devProfData['email'] =  gitData.email;
    }else{
        devProfData['email'] =  null;
    }
    if(gitData.company){
        devProfData['company'] =  gitData.company;
    }else{
        devProfData['company'] =  null;
    }
    if(gitData.repos_url){
        devProfData['repos'] = await getRepoData(gitData.repos_url);
    }else{
        devProfData['repos'] = null;
    }

    return devProfData;
}

module.exports.getDevData = getDevData;