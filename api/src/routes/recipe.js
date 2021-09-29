const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Recipe, Type, Op } = require('../db');
const {YOUR_API_KEY, spoonacularURL} = process.env;




module.exports = router