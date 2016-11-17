app.controller('newController', function($scope, friendsFactory, $location, $routeParams, $window) {
    console.log($location, 'this is location!');
    var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          console.log($scope.friends);
                        });
            };
   index();

   $scope.create = function(){
       console.log("IM INSIDE OF CONTROLLER");
       friendsFactory.create($scope.newfriend);
       $location.url('/');
       $scope.newfriend={};
   };

   $scope.delete = function(id){
       console.log('Im inside of delete controller');
       friendsFactory.delete(id);
       $location.url('/')

   }

});
