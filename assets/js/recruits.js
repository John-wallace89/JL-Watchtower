/*jshint esversion: 6 */

//Credit - took influences from https://www.ordinarycoders.com/blog/article/codepen-bootstrap-card-hovers//
//and https://codepen.io/jacoboakley/pen/ZpRbqB

function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card card-flip") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
            document.getElementsByClassName("front").style = "display: none";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
}

//Recruits Map Js
// Credit--- Mapbox https://docs.mapbox.com/mapbox-gl-js/---
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obi13YWxsYWNlODkiLCJhIjoiY2tvdHNuaDNpMGVmejJvcWpuZGUzdmJmbiJ9.BOt8BK_I-TyL3DxXUeKPig';
var recruitsMap = new mapboxgl.Map({
    container: 'recruit-map',
    style: 'mapbox://styles/john-wallace89/ckoxcyrn00j2w17mqtb9xelyf',
    center: [0, 0],
    zoom: 1, // starting zoom
});
// Credit --- Mapbox Geocoder: https://docs.mapbox.com/mapbox-gl-js/example/forward-geocode-custom-data/ ---
var customData = {
    'features': [{
            'type': 'Feature',
            'properties': {
                'title': 'Oliver Queen',
            },
            'geometry': {
                'coordinates': [-91.8782332, 33.9427327],
                'type': 'Point'
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'title': 'Kendra Saunders'
            },
            'geometry': {
                'coordinates': [31.2234448, 30.0599653],
                'type': 'Point'
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'title': 'Victor Stone'
            },
            'geometry': {
                'coordinates': [-83.2392922, 42.3528795],
                'type': 'Point'
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'title': 'Hal Jordan'
            },
            'geometry': {
                'coordinates': [-70.8248811, 43.6538381],
                'type': 'Point'
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'title': 'Dinah Lance'
            },
            'geometry': {
                'coordinates': [-91.8782332, 33.9427327],
                'type': 'Point'
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'title': 'Billy Batson'
            },
            'geometry': {
                'coordinates': [-75.2581159, 40.0026767],
                'type': 'Point'
            }
        }
    ],
    'type': 'FeatureCollection'
};

function forwardGeocoder(query) {
    var matchingFeatures = [];
    for (var i = 0; i < customData.features.length; i++) {
        var feature = customData.features[i];
        // Handle queries with different capitalization
        // than the source data by calling toLowerCase().
        if (
            feature.properties.title
            .toLowerCase()
            .search(query.toLowerCase()) !== -1
        ) {
            // data results using carmen geojson format:
            // https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
            feature.place_name = feature.properties.title;
            feature.center = feature.geometry.coordinates;
            feature.place_type = ['city'];
            matchingFeatures.push(feature);
        }
    }
    return matchingFeatures;
}

// Add the control to the map.
recruitsMap.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: forwardGeocoder,
        zoom: 10,
        placeholder: 'Enter secret identity...',
        mapboxgl: mapboxgl
    })
    
);

recruitsMap.addControl(new mapboxgl.NavigationControl());