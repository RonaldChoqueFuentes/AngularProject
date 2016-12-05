'use strict';

angular.module('angularProjectApp')
  .controller('DeleteCategoryCtrl', DeleteCategoryCtrl);
  
DeleteCategoryCtrl.$inject = ['$moment', '$uibModalInstance','data','Productos'];
 


function DeleteCategoryCtrl($moment, $uibModalInstance, data,Productos) 
{
   var vm = this;
   vm.close = close;
   vm.remove = remove;
   
   activate();

  function activate()
  {
      console.log('received', data);
      vm.selected = data;
  }


    function close()
    {
      $uibModalInstance.close();
    }

    function remove()
    {
       /* vm.promise = Productos.update(vm.selected, { id: 'cars', product: data.id });

        vm.promise.then(function(response){
            $uibModalInstance.close(response);
        });*/
    }

}

