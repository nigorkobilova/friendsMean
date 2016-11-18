app.controller('editController', ['$scope','friendsFactory', '$routeParams', "$location", function($scope, friendsFactory, $routeParams, $location) {

   // friendsFactory.getFriend(function(returnedData){
   //   $scope.friend = returnedData;
   //   console.log($scope.friend);
   // });


   $scope.update = function(){
       console.log("INSIDE OF UPDATE", $routeParams.id);
       friendsFactory.update($routeParams.id, $scope.newfriend, function(){
           console.log($scope.newfriend, 'has been updated!');
       });
       $scope.newfriend={};
       $location.url('/');
   }

   friendsFactory.show($routeParams.id, $scope.friend, function(data){
       console.log(data);
       $scope.friend = data;
   })

  // $scope.show = function(){
  //     console.log('INSIDE OF SHOW', $routeParams.id);
  //     friendsFactory.show($routeParams.id, $scope.friend, function(){
  //        console.log($scope.friend);
  //     });
  //     $scope.friend={};
  // }

}]);
