var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var QuestSchema = new Schema({
	name: String,
	location: String,
	latLng: {},
	description: String,
	timeRequired: Number,
	categoryTags: []

})

var Quest = mongoose.model('Quest', QuestSchema);
module.exports = Quest;
