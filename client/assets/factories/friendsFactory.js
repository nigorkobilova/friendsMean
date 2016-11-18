console.log('Friends Factory');

app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  var current_user;
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
        console.log("IM INSIDE OF FACTORY");
        $http.post('/friends', newfriend).then(function(returned_data){
        if (returned_data.error){
            callback(returned_data)
        }
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(id, newfriend, callback){
        console.log("inside of the factory!!!", id);
      $http.put('/friends/'+id, newfriend).then(function(returned_data){
         callback(returned_data.data)
      })
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){
        console.log(id, "recieved from Factory");
        $http.delete('/friends/'+id).then(function(){
            console.log('friend deleted');
            if (callback && typeof callback == 'function') {
                callback();
            }
        })
    };
    this.show = function(id, friend, callback){
        console.log(id, 'received from SHOW in Factory');
        $http.get('/friends/'+id).then(function(returned_data){
            friend = returned_data.data;
            callback(friend);
        })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };

    this.get_user = function(callback){
        callback(current_user);
    }

    this.set_user = function(new_user, callback){
        current_user = new_user;
        callback(current_user);
    }

  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
