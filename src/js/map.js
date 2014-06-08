function initialize() {
	var map_canvas = document.getElementById('map-wrapper'),
		map_center = new google.maps.LatLng(45.319061, -72.65293),
		map_options = {
			center: map_center,
			zoom: 12,
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
	    featureType: 'road',
	    elementType: 'labels.text',
	    stylers: [
	    	{ weight: 10 }
	    ]
	  }, {
	    featureType: 'road',
	    elementType: 'labels.text.fill',
	    stylers: [
	    	{ color: '#f6fcff' },
	    	{ weight: 10 }
	    ]
	  }, {
	    featureType: 'road',
	    elementType: 'labels.text.stroke',
	    stylers: [
	    	{ color: '#000000' },
	    	{ weight: 0.5 }
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
	  }
	]);

}

google.maps.event.addDomListener(window, 'load', initialize);