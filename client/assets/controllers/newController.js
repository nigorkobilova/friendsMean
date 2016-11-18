app.controller('newController', function($scope, friendsFactory, $location, $routeParams, $filter) {
    console.log($location, 'this is location!');
    var index = function(){
        friendsFactory.index(function(returnedData, $filter){
            $scope.friends = returnedData;
            console.log($scope.friends);
        });
    };
   index();

   $scope.create = function(){
       friendsFactory.create($scope.newfriend);
       $location.url('/');
       $scope.newfriend={};
   };

   $scope.delete = function(id){
       console.log('Im inside of delete controller');
       friendsFactory.delete(id, function() {
           index();
       });
   }

   $scope.filterDate = function(filter_date){
       console.log($scope.filter_date);
       return $filter('date')(filter_date, 'yyyy-MM-dd');
   }

});
