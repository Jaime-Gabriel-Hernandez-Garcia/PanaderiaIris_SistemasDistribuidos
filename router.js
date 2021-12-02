const express = require('express');
const router = express.Router();
const conexion = require('./database/db');



router.get('/', (req, res) =>{

    res.render('login.ejs');

})



router.get('/login', (req, res) =>{

    res.render('index.ejs');

})

router.get('/Contacto', (req, res) =>{

    res.render('contacto.ejs');

})

router.get('/inicio', (req, res) =>{

    res.render('inicio.ejs');

})




const crud = require("./Controllers/crud");

router.post('/save', crud.save)
router.post('/auth', crud.auth)



module.exports =  router;