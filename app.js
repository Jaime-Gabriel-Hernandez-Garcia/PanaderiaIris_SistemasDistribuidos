const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({

    secret:'secret',
    resave: true,
    saveUninitialized: true

}));


app.use( express.static( "public" ) );


app.set('view engine', 'ejs');



app.use(express.urlencoded({extended:false}));



app.use(express(JSON));



app.use('/', require('./router'));



app.listen(8088, ()=>{

    console.log('SERVER corriendo en http://localhost:8088');

});