var mongoose = require("mongoose");
var env = process.env;
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/geoQuest" )

module.exports.Quest = require("./users");
module.exports.User = require("./users");