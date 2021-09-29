const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Recipe, Diet, Op } = require('../db');
const {YOUR_API_KEY, spoonacularURL} = process.env;


const getApiInfo = async () => {
    const resAxios = await axios.get(`${spoonacularURL}/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);
    const { results } = resAxios.data ;
    
        
    if (results.length > 0) {

        let response = await results?.map((result) => {
            return {name: result.title, image: result.image, idApi: result.id, score: result.spoonacularScore,  diets: result.diets, summary:result.summary, steps: result.instructions}        
        })

        return response;
    } 
}

const getApiByName = async (name) => {
    const resAxios = await axios.get(`${spoonacularURL}/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${YOUR_API_KEY}`);
    const { results } = resAxios.data;
    
    let response = results?.map((result) => {
        return {name: result.title, image: result.image, idApi: result.id, score: result.spoonacularScore,  diets: result.diets, summary:result.summary, steps: result.instructions}
        })

    return response
}

const getDBByName = async (name) => {
    const DBInfo = await getDBInfo();
    const filtByName = DBInfo.filter(recipe => recipe.name.includes(name))
    return filtByName
}

const getInfoByName = async (name) => {
    const apiByName = await getApiByName(name)
    const DBByName = await getDBByName(name)
    const infoTotal = apiByName.concat(DBByName)
    return infoTotal
}

const getDBInfo = async () => {
    return await Recipe.findAll({ 
        include:{
            model: Diet,
            attributes: ['name'],
            through:{
                attributes: []
            }
        }
    })
}

const getAllInfo = async () => {
    const apiInfo = await getApiInfo()
    const bdInfo = await getDBInfo()
    const infoTotal = apiInfo.concat(bdInfo)
    return infoTotal
}

router.get('/', async (req, res) => {
    
    const { name } = req.query

    if (name) {
  
        const infoByName = await getInfoByName(name)
        res.json(infoByName);

    }else{

        const allDate = await getAllInfo()   
        res.json(allDate);

    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const resAxios = await axios.get(`${spoonacularURL}/recipes/${id}/information?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);

            let obj = {};

            obj = {name: resAxios.data.title, image: resAxios.data.image, idApi: resAxios.data.id, score: resAxios.data.spoonacularScore,  diets: resAxios.data.diets, summary:resAxios.data.summary, steps: resAxios.data.instructions}
            
            res.json(obj);
        })

module.exports = router