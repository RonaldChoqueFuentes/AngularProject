'use strict';

angular.module('angularProjectApp')
  .service('Productos', function ($q, $resource) 
  {

   var resource = $resource('/api/products/:id/:product',
         {
           id: '@id',
           product: '@product'
         },
           {
             'put': { method: 'PUT'} 
           },
           
           {
             'delete': { method: 'DELETE'} 
           }
         );

    // AngularJS will instantiate a singleton by calling "new" on this function
  
  function get(id)
   {
 
      var products = $q.defer();

      resource.get({id: id}).$promise.then(function(response){
        products.resolve(response);
      },
       function(error)
       {
         products.reject(error);
       }
      );

      return products.promise;

   }

    function update(data, params) 
    {
      console.log('Running update client Service');
      
      var productQuery = $q.defer();

      resource.put({id: params.id, product: params.product }, data)
      .$promise.then
        (
           function(response)
           {
              productQuery.resolve(response);
           }, 
           function(error)
           {
                productQuery.reject(error);
           }
        );
      
      return productQuery.promise;   
  }


   function remove(data, params)  
   {   
      var productQuery = $q.defer();

      resource.delete({id: params.id, product: params.product })
      .$promise.then
        (
           function(response)
           {
              productQuery.resolve(response);
           }, 
           function(error)
           {
              productQuery.reject(error);
           }
        );

      return productQuery.promise;   
  }


    return {
      get: get,
      update: update,
      remove:remove
    };
});
