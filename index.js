
//loads the map

var myLatlng = new google.maps.LatLng(32.5093, -92.1193);
var mapOptions = {
  zoom: 13,
  center: myLatlng,
  mapTypeId: 'roadmap',
}

var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

    new google.maps.Marker({
      position: myLatlng,
      map,
      
    });

//loads the requirement for direction services  

 var directionsService = new google.maps.DirectionsService();
 var directionsRenderer = new google.maps.DirectionsRenderer();
 directionsRenderer.setMap(map);

 var calculate= document.getElementById('getDirection');
 calculate.addEventListener("click", function(event){
  event.preventDefault();
  calcRoute();
 })

 function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode:google.maps.TravelMode.DRIVING 
  };
  directionsService.route(request, (result, status) => {
    if (status == 'OK') {
      
      directionsRenderer.setDirections(result);
    }
  });
}


var options= {
  types: ['(cities)']
}

var originAutoComplete = new google.maps.places.Autocomplete(document.getElementById('start'), options);
//var wayPointAutoComplete= new google.maps.places.Autocomplete(document.getElementById('wayPoint') , options);
var destinationAutoComplete = new google.maps.places.Autocomplete(document.getElementById('end'), options);


 