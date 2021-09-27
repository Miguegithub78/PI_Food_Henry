const express = require('express')
const router = express.Router()
const { Diet } = require('../db');

router.get('/', async (req, res) => {
    try{
        let typesDiet = await Diet.findAll();
        let diets = typesDiets.map(type => type.dataValues.name)
        res.status(200).json(types);
    } catch (error){
        console.log(error);
    }
})

module.exports = router