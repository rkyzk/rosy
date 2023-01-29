function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];
    var markers = locations.map(function(location, i) {
        // this map method is a build-in JS method, not google map.  
        // This returns an array with the results of looping through each item in our locations array.
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
            });
            // add marker images to the map  (copy from the gooogle map
            var markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        }
 