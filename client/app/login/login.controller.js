'use strict';

angular.module('angularProjectApp')
  .controller('LoginCtrl', function ($state,Usuarios) {
     var vm = this;
     vm.UserName = '';
     vm.Password = '';
     
     vm.UserNameMessage = 'Enter User Name: ';
     vm.PasswordMessage = 'Enter Password:';

     vm.ValidateLogin = ValidateLogin;
    
     function ValidateLogin()
     {
      console.log('validate login controller');
      
      vm.promise = Usuarios.loginUser(vm.UserName,vm.Password);
      vm.promise.then(function(response)
      {
            console.log(response.result);

            if(response.result === true )
            {
              $state.go('categories');     
            }

             if(response.result=== false)
            {
              $state.go('login');     
            }        
      });

     }
  });
