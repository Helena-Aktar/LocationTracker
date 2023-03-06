// Get the map element
var mapElement = document.getElementById("map");

// Create a map object
var map = new google.maps.Map(mapElement, {
  zoom: 10,
});

// Get the user's current location and set it as the center of the map
navigator.geolocation.getCurrentPosition(function (position) {
  var userLocation = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude
  );
  map.setCenter(userLocation);
});

// Update the user's location on the map every 10 seconds
setInterval(function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    var userLocation = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    var marker = new google.maps.Marker({
      position: userLocation,
      map: map,
    });
  });
}, 4000);
