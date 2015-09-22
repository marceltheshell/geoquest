var mongoose = require("mongoose");
var bcrypt = require('bcrypt');


var Schema = mongoose.Schema;

var QuestSchema = new Schema({
	name: String,
	location: String,
	description: String,
	timeRequired: Number,
	categoryTags: []

})

var Quests = mongoose.model('Quest', QuestSchema);
module.exports = Quests;