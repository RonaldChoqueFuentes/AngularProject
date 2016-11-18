{
  'use strict';

 angular.module('angularProjectApp').controller('EditCategoryCtrl', EditCategoryCtrl);

  EditCategoryCtrl.$inject = ['$moment', '$uibModalInstance','data'];

  function EditCategoryCtrl($moment, $uibModalInstance,data) 
  {
     var vm = this;
     vm.saveChanges = saveChanges;
     vm.close=close;
     
     activate();

   function activate() {
      console.log('received', data);
      vm.selected = data;
    }

     function saveChanges() 
     {
        /*vm.selected.birthDate = 
        $moment(data.birthDateObject).format('DD-MM-YYYY');
        vm.promise = Course.update(
        vm.selected,
        {
          id: 'angular',
          student: data.id
        }
        );
        vm.promise.then(function(response){
            $uibModalInstance.close(response);
        });*/
      }
          
    function close()
    {
      $uibModalInstance.close();
    }
  }

}