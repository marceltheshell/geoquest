var map;
var markers = [];
var questInfo = [];
var LatLng = { lat: 37.78, lng: -122.44};


$(document).ready( function (){
	getMap();
	
	$.get("/api/quests", function(res){
				res.forEach(function(el){
					questInfo.push(el.location)
				})
			}).done(function(){positionHandler(questInfo)})


	$('#locationBtn').click(function(e){
		e.preventDefault()
		loc = $("#loc").val();
		if(loc !== ""){
			locHandler();
			};
			$('#loc').val("");
		});
	});


	function positionHandler (arr) {
		markers = [];
		console.log(arr)
		arr.forEach(function(el) {
			var split = el.split(" ");
			var addr = split.join("+");
		
		$.get("https://maps.googleapis.com/maps/api/geocode/json?", { "address" : addr}, function (data) {
			var questLatLng = data.results[0].geometry.location;
			console.log(questLatLng)
		// questLatLng = { lat: latitude, lng: longitude};
		var marker = new google.maps.Marker({
			position: questLatLng,
			map: map,
			title: questInfo.name
		})
		markers.push(marker)
	})
		setMapOnAll(map);

	})

	}
	function locHandler () { 
		var locArray = $('#loc').val().split(" ");
		var addr = locArray.join("+");
		$.get("https://maps.googleapis.com/maps/api/geocode/json?", { "address" : addr}, function (data) {
			LatLng = data.results[0].geometry.location;
			setMapOnAll(map)
			getMap();
		})
	}

	function getMap () {
		map = new google.maps.Map(document.getElementById('map'), {
			center: LatLng,
			zoom: 11
		});
		console.log("sanity")


		var marker = new google.maps.Marker({
			position: LatLng,
			map: map,
			title: "HEYO"
		})
		markers.push(marker)
		marker.setMap(map);
	};

	function setMapOnAll(map) {
  	for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

