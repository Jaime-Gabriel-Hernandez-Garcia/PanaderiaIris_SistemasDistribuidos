const conexion = require('../database/db');



exports.save = (req, res)=>{

    const nombre = req.body.nombre;
    const apellidos = req.body.apellido;
    const user = req.body.user;
    const pass = req.body.password;

    console.log(nombre + " , " + apellidos + " , " + user + " , " + pass);

    conexion.query('INSERT INTO MUsuario SET ?' ,{nom_usu:nombre, ape_usu:apellidos, user_usu:user, pass_usu:pass}, (error, results)=>{

                      if(error){
                          console.log(error);
                      }  
                      else{
                          res.redirect('/');
                      }

                    })

}



exports.auth =  (req, res)=>{

    const user = req.body.user;
    const pass = req.body.password;

    if(user && pass){
        conexion.query('SELECT * FROM MUsuario WHERE user_usu = ?', [user], async(error, results)=>{
            if(results.lenght == 0 ||  (pass, results[0].pass)){
                res.redirect('/inicio');
            }
            else{
                res.redirect('/inicio');
            }
        }) 
    }
}