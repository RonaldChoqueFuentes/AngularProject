'use strict';

angular.module('angularProjectApp')
  .controller('LoginCtrl', function ($scope) {
     var vm = this;
     vm.UserName = '';
     vm.Password = '';
     
     vm.UserNameMessage = 'Enter User Name';
     vm.PasswordMessage = 'Enter Password';

     vm.ValidateLogin = ValidateLogin;
    
     function ValidateLogin()
     {
       var result = false;
       if(vm.UserName==='sa' && vm.Password=='123')
       { 
         result = true;
       }
       
     }
  });
