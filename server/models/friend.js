console.log('friends model');
var mongoose = require('mongoose');
// var FormatDate = mongoose.Schema.Types.FormatDate = require('../../node_modules/mongoose-schema-formatdate/formatdate')
// build your friend schema and add it to the mongoose.models
var FriendsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
})

var Friend = mongoose.model('Friends', FriendsSchema)
