var map;
var markers = [];
var restaurantLatLng = {};
var LatLng = { lat: 37.78, lng: -122.44};


$(document).ready( function (){
	getMap();
});

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