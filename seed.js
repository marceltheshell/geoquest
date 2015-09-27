var db = require('./models')

/* empty the user db */

// db.User.remove({}, function (err, suc){
// 	if(err){return console.log(err);}
// 	else{console.log("Success!");}
// })

/* empty the quests db */

// db.Quests.remove({}, function (err, suc){
// 	if(err){return console.log(err);}
// 	else{console.log("Success!");}
// })

/* New user creation Example */
// function newUser () {
// 	db.User.createSecure("justin", "password", "Berkeley",function(err,user){
// 		if(err){return console.log(err);}
// 		else{
// 		console.log(user);}

// 	})
// }

/*New Quest creations example*/

// function newQuest(){

// 		db.Quest.create({name: "new GeoQuest", location: "225 Bush St, San Francisco", description: "Making a GeoQuest App", timeRequired: 60},function(err,quests){
// 		if(err){return console.log(err);}
// 		else{
// 		console.log(quests);
// 		}

// 	})
	
// }

function seeDB () {
	db.User.find({}, function (err,user){
		if(err){return console.log(err);}
		console.log(user);
})
}



seeDB();
//<<<<<<< HEAD
// newUser();
// newQuest();
//=======
// newUser();
// newQuest();
//>>>>>>> 039a5f6c6f4ee8bfb3a876ae4a5a5fbe94c52d06
