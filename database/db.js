const mysql = require("mysql");

const conexion = mysql.createConnection({

    host: 'boscyjj2iqecni6kkagz-mysql.services.clever-cloud.com',
    user: 'ul0dd8dozecb60xg',
    password: '3BK0w5uzwpCwjUx1ZxqA',
    database: 'boscyjj2iqecni6kkagz'

});

conexion.connect((error) =>{

    if(error){
        console.error('El error de conexion es: ' + error);
        return
    }
    console.log('¡Conectado a la BD MYSQL!');

})

module.exports = conexion;