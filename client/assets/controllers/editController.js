app.controller('editController', ['$scope','friendsFactory', '$routeParams', "$location", function($scope, friendsFactory, $routeParams, $location) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial -
    so we didn't set a variable so we could reuse it -
    we just run the friendsFactory method directly.
  */
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

  $scope.show = function(){
      console.log('INSIDE OF SHOW', $routeParams.id);
      friendsFactory.show($routeParams.id, $scope.friend, function(){
         console.log($scope.friend);
      });
      $scope.friend={};
  }

}]);
