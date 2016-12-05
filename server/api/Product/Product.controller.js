/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/Products              ->  index
 */

'use strict';

var lodash = require('lodash');
var jsonfile = require('jsonfile');
var path = require('path');
var FILE = path.resolve('db', 'productos.json');

// Gets a list of Products
export function getAll(req, res)
{
  jsonfile.readFile(FILE, function (err, obj) {
    if (err)
     {
       res.status(500).send('Internal Server Error');
    }
     res.json(obj);
  });
}

export function get(req, res) {
  
  jsonfile.readFile(FILE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }

    var array = lodash.find(obj.Almacenes, function(Almacen){
      return Almacen.key === req.params.id
    });

    if(!array) {
      res.status(404).send('Not Found');
    }

    res.json(array);
  });
}

  export function deleteProduct(req, res)
  {
          
   console.log('Running Delete Product Service');
         

  jsonfile.readFile(FILE, function (err, obj) 
  {
     
    var result = null;
   
    var almacen = lodash.find(obj.Almacenes, function (Almacen) 
                  {
                     return Almacen.key === req.params.id; 
                  });

    if (!almacen)
    {
      res.status(404).send('Almacen Not found: ' + req.params.id);
    }
       
   
     var deleteProduct = lodash.remove(almacen.products, function (product) 
               {
                  return product.id == req.params.product;
               });
 
       if (!deleteProduct) 
       {
         res.status(404).send('Product Not Fount: ' + req.params.product);
       }
      
     setTimeout(function ()
      {
        jsonfile
        jsonfile.writeFile(FILE, {Almacenes: obj.Almacenes},
            function (err) 
            {
                console.error(err);//res.status(500).send('Error 500');
            }
         );

         res.status(200).type('json').json(obj);
       },
        2000
    );

    });

  }

export function update(req, res) 
{
  console.log('Running update server');

  jsonfile.readFile(FILE, function (err, obj) 
  {
     
    var result = null;

    var almacen = lodash.find(obj.Almacenes, function (Almacen) 
                  {
                     return Almacen.key === req.params.id; 
                  });

    if (!almacen)
    {
      res.status(404).send('Almacen Not found: ' + req.params.id);
    }
       
     
       
     lodash.forEach(almacen.products, function (product) 
        {

          if (product.id == req.params.product) 
          {
            product.Marca = req.body.Marca;
            product.Modelo = req.body.Modelo;
            product.Precio = req.body.Precio;
            product.InsertedDate = req.body.InsertedDate;
            
            result = product;
          }
        });

 
       if (!result) 
       {
         res.status(404).send('Error 404');
       }

      
     setTimeout(function ()
      {
        jsonfile.writeFile(FILE, {Almacenes: obj.Almacenes},
            function (err) 
            {
                console.error(err);//res.status(500).send('Error 500');
            }
         );
        
         res.status(200).type('json').json(result);
       },
        2000
    );

  });

  


}
