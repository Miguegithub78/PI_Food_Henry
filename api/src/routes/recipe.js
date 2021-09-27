const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Recipe, Type, Op } = require('../db');
const {YOUR_API_KEY, spoonacularURL} = process.env;

router.get('/', async (req, res) => {
            const { name } = req.query

            if (!name) {
                res.status(404).json('La búsqueda requiere un nombre')
            }else{
                const resAxios = await axios.get(`${spoonacularURL}/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${YOUR_API_KEY}`);
                const { number, totalResults, results} = resAxios.data ;
                let response = []
                
                if (results.length > 0) {
                let obj = {};
                let objStep = {};
                results.map((result) => {
                    obj = {name: result.title, image: result.image, idApi: result.id, score: result.spoonacularScore,  diets: result.diets, summary:result.summary, steps: result.analyzedInstructions[0].steps.map((steps) => {
                        objStep = {number: steps.number, step: steps.step}
                        return objStep;
                    })}
                    response.push(obj);
                })
            }
            res.json(response);

        }
    }
)

module.exports = router