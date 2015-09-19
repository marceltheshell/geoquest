var express = require("express"),
    app = express();

app.get("/", function (req, res) {
	res.send("Send me on a Geoquest!");
});

app.listen(3000, function () {
	console.log("Geoquest is twerking");
});
