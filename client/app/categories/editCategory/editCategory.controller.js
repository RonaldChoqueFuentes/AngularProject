{
  'use strict';

   angular.module('angularProjectApp')
          .controller('EditCategoryCtrl', EditCategoryCtrl);

  EditCategoryCtrl.$inject = ['$moment', '$uibModalInstance','data','Productos'];

  function EditCategoryCtrl($moment, $uibModalInstance, data,Productos) 
  {
     var vm = this;

     vm.openDateSelector = openDateSelector;
     
     vm.saveChanges = saveChanges;
     vm.close = close;
     vm.isDateOpened = false;
     vm.dateFormat = 'dd-MM-yyyy';
     vm.dateOptions = { maxDate: new Date() };

     activate();
     
   function activate() {
      console.log('received', data);
      data.InsertedDateObject = $moment(data.InsertedDate, 'DD-MM-YYYY').toDate();
      vm.selected = data;
    }

     function saveChanges() 
     {
        vm.selected.InsertedDate = $moment(data.InsertedDateObject).format('DD-MM-YYYY');
         vm.promise = Productos.update(vm.selected, { id: 'cars', product: data.id });

        vm.promise.then(function(response){
            $uibModalInstance.close(response);
        });
      }
          
    function close()
    {
      $uibModalInstance.close();
    }
    
     function openDateSelector() 
     {
      vm.isDateOpened = true;
     }
  }
 }
