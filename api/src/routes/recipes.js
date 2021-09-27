const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Recipe, Type, Op } = require('../db');
const {API_KEY, spoonacularURL} = process.env;

router.get('/', async (req, res) => {
        const { name } = req.query

        if(!name){
            const resAxios = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d524b9a5a36e4ef6bd9fac6808e213c9&addRecipeInformation=true&number=100`);
            const { number, totalResults, results} = resAxios.data ;
            let response = []
            if (results.length > 0) {
                let obj = {};
                for (let i = 0; i< results.length ; i++ ) {
                    obj = {name: results[i].title, image: results[i].image, idApi: results[i].id, score: results[i].spoonacularScore,  diets: results[i].diets, summary:results[i].summary}
                    response.push(obj);
                }
            }
            res.json(response);
        }else{
            // https://api.spoonacular.com/recipes/complexSearch?query=Chicken%20and%20Mango%20Skewer&addRecipeInformation=true&number=100&apiKey=d524b9a5a36e4ef6bd9fac6808e213c9
        }
})

module.exports = router