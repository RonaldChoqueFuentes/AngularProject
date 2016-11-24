'use strict';

angular.module('angularProjectApp')
  .service('Productos', function ($q, $resource) {

   var resource = $resource('/api/products/:id', {id: '@id'});

    // AngularJS will instantiate a singleton by calling "new" on this function
  
  function get(id) {
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

    return {
      get: get
    };
}
  
  );
