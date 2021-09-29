const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Recipe, Diet, Op } = require('../db');

router.post('/', async (req, res) => {
    let{
        name,
        summary,
        score,
        healthScore,
        image,
        steps,
        diets
    } = req.body

    let recipeCreate = await Recipe.create({ 
        name,
        summary,
        score,
        healthScore,
        image,
        steps,
    })

    let dietDB = await Diet.findAll({ 
        where: {name: diets}
     })

     recipeCreate.addDiet(dietDB)
     res.send('Succesfull')
})



module.exports = router