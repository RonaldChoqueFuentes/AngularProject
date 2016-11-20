'use strict';

angular.module('angularProjectApp')
  .controller('CategoriesCtrl', function (NgTableParams,lodash,dialogs) {
      var vm = this;

       vm.edit = edit;

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

            var categories = [
                               {"id":1,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()},
                               {"id":2,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()},
                               {"id":3,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()},
                               {"id":4,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()},
                               {"id":5,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()},
                               {"id":6,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()},
                               {"id":7,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()},
                               {"id":8,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()},
                               {"id":9,"Marca":'toyota',"Modelo":'rav4',"Precio":45, "InsertedDate": new Date()}
                               ];

            return categories;

           /* return Course.get('angular').then(function(response){
                lodash.map(response.students, function(s){
                    s.age = getAge(s.birthDate);
                });
                return response.students;
            });*/
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
  });


  
