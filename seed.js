var db = require('./models')

/* empty the user db */

// db.User.remove({}, function (err, suc){
// 	if(err){return console.log(err);}
// 	else{console.log("Success!");}
// })

// // /* empty the quests db */

// db.Quest.remove({}, function (err, suc){
// 	if(err){return console.log(err);}
// 	else{console.log("Success!");}
// })

// /* New user creation Example */
function newUser () {
	db.User.createSecure("justin", "password", "Berkeley",function(err,user){
		if(err){return console.log(err);}
		else{
		console.log(user);}

	})
}

/*New Quest creations example*/

function newQuest(){

		db.Quest.create({name: "other GeoQuest", location: "1958 Marin Ave. Berkeley, CA", description: "Making a GeoQuest App", timeRequired: 60},function(err,quests){
		if(err){return console.log(err);}
		else{
		console.log(quests);
		}

	})
	
}

function seeDB () {
	db.User.find({}, function (err,user){
		if(err){return console.log(err);}
		console.log(user);
})
}

function seeQuests () {
	db.Quest.find({}, function (err,quests){
		if (err){return console.log(err);}
			console.log(quests);
	})
}

function addQuests () {
	var quest = {
		name: "Database Work",
		location: "225 Bush St, San Francisco",
		description: "making things work",
		timeRequired: 30
	}

	db.User.findOne({userName: "justin"}, function(err, user){
		if (err){return console.log(err);}
		var quest = {
		name: "Item 1",
		location: "225 Bush St, San Francisco",
		description: "making things work",
		timeRequired: 30
	}
		user.toDo.push(quest);
		user.save(function(err, success) {
			if(err){return console.log(err);}
			console.log(user)
		})

	})
}



// seeDB();
// seeQuests();
//<<<<<<< HEAD
 // newUser();
 // newQuest();
 // addQuests();
//=======
// newUser();
// newQuest();
//>>>>>>> 039a5f6c6f4ee8bfb3a876ae4a5a5fbe94c52d06
