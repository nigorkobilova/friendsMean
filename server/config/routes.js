var friends = require('../controllers/friends.js');

module.exports = function(app){
    console.log('routes connected');
    app.get('/friends', friends.index);
    app.get('/friends/:id', friends.show);
    app.post('/friends', friends.create);
    app.put('/friends/:id', friends.update);
    app.delete('/friends/:id', friends.delete);
}
