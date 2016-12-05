'use strict';

angular.module('angularProjectApp')
  .service('Usuarios', function ($q, $resource) {

 var resource = $resource('/api/Usuarios/:user/:password',
         {
           user: '@user',
           password: '@password'
         },
           {
             'put': { method: 'PUT'} 
           }
         );

   function loginUser(user, password)
   {
     console.log('validate login client Service');

      var users = $q.defer();
  
      resource.put({user: user, password: password}).$promise.then(function(response){
        users.resolve(response);
      },
       function(error)
       {
         users.reject(error);
       }
      );

      return users.promise;

   }

  return {
      loginUser: loginUser
    }
});
