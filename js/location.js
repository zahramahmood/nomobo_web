$(document).ready(function(){

	var apikey = "AIzaSyCAQi9kQgLlcYCgc1RtvS5qM8edkcm8pio"
	var request = "https://www.googleapis.com/geolocation/v1/geolocate?key="+apikey

	// get user location
    $.post(request, function(data){

    	var pos = {
    		lat : data.location.lat,
    		lng : data.location.lng
    	}

    	initialize(pos);
	});

	function initialize(pos) {
	  var pyrmont = new google.maps.LatLng(pos);

	  var request = {
	    location: pyrmont,
	    radius: '500',
	    types: ['store']
	  };

	  service = new google.maps.places.PlacesService($('#locate').get(0));
	  service.nearbySearch(request, callback);
	}

	function callback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	  	console.log(results.length);
	    for (var i = 0; i < results.length; i++) {
	      var place = results[i];
	    }
	  }
	}

});
