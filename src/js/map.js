var map_canvas = document.getElementById('map-wrapper'),
	map_center = new google.maps.LatLng(45.319061, -72.65293),
	map;

function initialize() {
	var map_options = {
			center: map_center,
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true
		},
		map = new google.maps.Map(map_canvas, map_options);

	marker = new google.maps.Marker({
		position: map_center,
		map: map,
		title: 'Hello World!'
	});

	map.set('styles', [
	  {
	    featureType: 'road',
	    elementType: 'geometry',
	    stylers: [
		    { color: '#d94527' }
	    ]
	  }, {
	    featureType: 'landscape',
	    elementType: 'geometry',
	    stylers: [
	      { hue: '#ffff00' },
	      { gamma: 1.4 },
	      { saturation: 82 },
	      { lightness: 96 }
	    ]
	  },
	  { 
	  	featureType: "landscape",
	  	elementType: "geometry.fill", 
	  	stylers: [
	  		{ visibility: "on" },
	  		{ hue: "#006eff" },
	  		{ color: "#f6fcff" } 
	  	] 
	  }
	]);

}

google.maps.event.addDomListener(window, 'load', initialize);