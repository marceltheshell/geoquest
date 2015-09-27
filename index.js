var express = require("express"),
bodyParser = require('body-parser'),
path = require('path'),
session = require('express-session'),
db = require('./models')
    
    
 app = express();
var views = path.join(process.cwd(), "views");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
app.use(session({secret: "super secret key", resave: false, saveUninitialized: true}));
app.use(function(req,res,next){
	req.login = function (user) {
		req.session.userId = user._id;
	};
	req.currentUser = function (cb) {
		db.User.findOne({_id: req.session.userId}, function (err, user){
			req.user = user;
			cb(null, user);
		})
	};
	req.logout = function () {
		req.session.userId = null;
		req.user = null;
	}
	next();
});



app.get("/", function (req,res) {
	res.sendFile(path.join(views, "index.html"))
});

app.get("/home", function (req,res) {
	req.currentUser(function(err,user){
		if (err){return console.log(err);}
		else {
			console.log(user)
			res.render('home', { userName : user.userName, toDo: user.toDo} )
		}
	})
	
});

app.get('/api/quests', function (req, res){
	db.Quest.find({}, function(err, quests){
		if(err){
			console.log(err);
		}else{
			res.send(quests);
		}
	});
});

app.get('/api/users', function (req, res){
	db.User.find({}, function(err, users){
		if(err){
			console.log(err);
		}else{
			res.send(users);
		}
	});
});

app.get('/api/users/:id', function (req, res){
	db.User.findOne({_id: req.params.id}, function(err, user){
		if (err){
			console.log(err);
		}else{
			res.send(user);
		}
	});
});


/*Login /signup route */
app.post('/', function (req,res){
	if(req.body.login === "true") {
		db.User.authenticate(req.body.username, req.body.password, function (err, user){
			if(err){
				console.log(err);
				res.redirect("/")}
				else{
					req.login(user)
					res.redirect("/home");}
				})
	}
	else{
		db.User.createSecure(req.body.username, req.body.password, req.body.homeCity, function(err, user){
			if(err){return console.log(err);}
			else{
				req.login(user);
				res.redirect("/home");
			}
		})
	}
	
})

app.listen(3000, function () {
	console.log("Geoquest is twerking");
});
