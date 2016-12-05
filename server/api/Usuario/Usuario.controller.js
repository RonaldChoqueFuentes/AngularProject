/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/Usuarios              ->  index
 */

'use strict';

var lodash = require('lodash');
var jsonfile = require('jsonfile');
var path = require('path');
var FILE = path.resolve('db', 'usuarios.json');

// Gets a list of Usuarios
export function index(req, res) {
  res.json([]);
}


  export function LoginUser(req, res)
  {
     console.log('Running LoginUser server Service');
         
    jsonfile.readFile(FILE, function (err, obj) {

     var result = false;
      
       var user = lodash.find(obj.usuarios, function (usuario) 
                  {
                     return (usuario.usuario === req.params.user) && (usuario.password === req.params.password); 
                  });

      console.log('Running LoginUser server Service   1');

      console.log(user);

      if(!user)
      {
        result = false;  
      }
      else
      {
         result = true;
      }
      
     
 
       setTimeout(function ()
        {
            res.status(200).type('json').json({result:result});

        });
      
    });

  }
  
