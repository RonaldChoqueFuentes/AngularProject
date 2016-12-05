'use strict';

angular.module('angularProjectApp')
  .controller('CategoriesCtrl', function (NgTableParams,dialogs, Productos,lodash) {
      var vm = this;

       vm.edit = edit;
       vm.remove = deleteCategory;

       activate();

        function activate() {
            console.log('activate');
            vm.tableParams = new NgTableParams({}, {
                filterDelay: 0,
                getData: getData
            });
        }

       function getData(params) {
            console.log('getData');

             return Productos.get('cars').then(function(response){
                lodash.map(response.products, function(s){
                 
                });

                return response.products;
            });
        }

       function edit(category)
       {
            var options = {
                size: 'lg',
                animation:true
            };
       
            var dialog = dialogs.create(
                'app/categories/editCategory/editCategory.html',
                'EditCategoryCtrl',
                category,
                options,
                'vmCategoryEdit');

            dialog.result.then(function(s){
                activate();
            });
        }

       
       function deleteCategory(category)
       {
            var options = {
                size: 'lg',
                animation:true
            };
       
            var dialog = dialogs.create(
                'app/categories/deleteCategory/deleteCategory.html',
                'DeleteCategoryCtrl',
                category,
                options,
                'vmDeleteCategory');

            dialog.result.then(function(s){
                activate();
            });
        }
  });


  
