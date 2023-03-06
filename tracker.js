var map_init = L.map("map", {
  center: [23.7984463, 90.4031033],
  zoom: 8,
});
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map_init);
L.Control.geocoder().addTo(map_init);
if (!navigator.geolocation) {
  console.log("Your browser doesn't support geolocation feature!");
} else {
  setInterval(() => {
    navigator.geolocation.getCurrentPosition(getPosition);
  }, 5000);
}
var marker, circle, lati, longi, accuracy;

function getPosition(position) {
  // console.log(position)
  lati = position.coords.latitude;
  longi = position.coords.longitude;
  accuracy = position.coords.accuracy;

  //   if (marker) {
  //     map_init.removeLayer(marker);
  //   }

  //   if (circle) {
  //     map_init.removeLayer(circle);
  //   }

  marker = L.marker([lati, longi]);
  circle = L.circle([lati, longi], { radius: accuracy });

  var featureGroup = L.featureGroup([marker, circle]).addTo(map_init);

  map_init.fitBounds(featureGroup.getBounds());

  console.log(
    "Your coordinate is: Latitude: " +
      lati +
      " Longitude: " +
      longi +
      " Accuracy: " +
      accuracy
  );
}
