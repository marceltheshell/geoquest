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

var UserSchema = new Schema({
	userName: String, 
	passwordDigest: String,
	homeCity: String,
	createdAt: Date,
	toDo: [QuestSchema],
	addedQuests: [],
	completedQuests: [QuestSchema],
	profilePic: String,

})


UserSchema.statics.createSecure = function(name, password, homeCity, cb) {
	var _this = this;
	bcrypt.hash(password, 10, function (err,hash){
		var user = {
			userName: name,
			passwordDigest: hash,
			homeCity: homeCity,
			createdAt: Date.now()
		};
		_this.create(user, cb)
	});
}

UserSchema.statics.authenticate = function(name, password, cb) {
	this.findOne({userName: name}, function (err,user){
		if(user === null) {
			cb("can\'t find user with that name", null);
		}else if (user.checkPassword(password)){
			cb(null,user);
		}else{
			cb("password incorrect", user);
		}
	});
};

UserSchema.methods.checkPassword = function(password) {
	return bcrypt.compareSync(password, this.passwordDigest);
}



var User = mongoose.model('User', UserSchema);
var Quest = mongoose.model('Quest', QuestSchema);
module.exports = Quest;
module.exports = User;