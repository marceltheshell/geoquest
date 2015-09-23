var db = require('./models')

/* empty the user db */

db.User.remove({}, function (err, suc){
	if(err){return console.log(err);}
	else{console.log("Success!");}
})

/* empty the quests db */

// db.Quests.remove({}, function (err, suc){
// 	if(err){return console.log(err);}
// 	else{console.log("Success!");}
// })
function newUser () {
	db.User.createSecure("justin", "password", "Berkeley",function(err,user){
		if(err){return console.log(err);}
		else{
		console.log(user);}

	})
}

function newQuest(){

		db.Quest.create({name: "new GeoQuest", location: "225 Bush St, San Francisco", description: "Making a GeoQuest App", timeRequired: 60},function(err,quests){
		if(err){return console.log(err);}
		else{
		console.log(quests);
		}

	})
	
}




newUser();
newQuest();