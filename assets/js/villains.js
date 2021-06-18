/*jshint esversion: 6 */

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obi13YWxsYWNlODkiLCJhIjoiY2tvdHNuaDNpMGVmejJvcWpuZGUzdmJmbiJ9.BOt8BK_I-TyL3DxXUeKPig';
let villainsMap = new mapboxgl.Map({
    container: 'villain-map',
    style: 'mapbox://styles/john-wallace89/ckoxcyrn00j2w17mqtb9xelyf',
    center: [0, 0],
    zoom: 1.5, // starting zoom
});

villainsMap.addControl(new mapboxgl.NavigationControl());

let size = 200;

// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
let pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

    // When the layer is added to the map,
    // get the rendering context for the map canvas.
    onAdd: function () {
        let canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    },

    // Call once before every frame where the icon will be used.
    render: function () {
        var duration = 1000;
        var t = (performance.now() % duration) / duration;

        var radius = (size / 2) * 0.3;
        var outerRadius = (size / 2) * 0.7 * t + radius;
        var context = this.context;

        // Draw the outer circle.
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
        context.fill();

        // Draw the inner circle.
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            radius,
            0,
            Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 100, 100, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // Update this image's data with data from the canvas.
        this.data = context.getImageData(
            0,
            0,
            this.width,
            this.height
        ).data;

        // Continuously repaint the map, resulting
        // in the smooth animation of the dot.
        villainsMap.triggerRepaint();

        // Return `true` to let the map know that the image was updated.
        return true;
    }
};

villainsMap.on('load', function () {
    villainsMap.addImage('pulsing-dot', pulsingDot, {
        pixelRatio: 2
    });

    villainsMap.addSource('dot-point', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [{
                    'type': 'Feature',
                    'properties': {
                        'description': '<p>Reports of local tribesman in the Amazon being kidnapped by an army of sophisticated primates!<br>This sounds like the work of <a href="https://en.wikipedia.org/wiki/Gorilla_Grodd" target="_blank">Grodd!</a></p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-62.2333901, -3.465305] // icon position Grod
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<p>We have a hostage situation in the penthouse suite of Ceasars Palace in Las Vegas...and reports of a Hyena on guard outside...<br> sounds like <a href="https://en.wikipedia.org/wiki/Harley_Quinn" target="_blank">Harley Quinn</a> is up to no good again!</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-115.4552016, 36.1252285] // icon position Harley Quinn
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<p>A series of explosions at Ace chemicals in Gotham and a number of thugs spotted in clown masks...<br>We have sent Batman to deal with the <a href="https://en.wikipedia.org/wiki/the_joker" target="_blank">Joker</a></p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-74.2598796, 40.6976701] // icon position Joker
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<p>Reports of riots in Athens and strange storms over Mount Olympos!<br> We suspect this is the work of <a href="https://en.wikipedia.org/wiki/Ares_(DC_Comics)" target="_blank">Ares</a>, god of war</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [23.6682984, 37.9909517] // icon position Aries
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<p>We know <a href="https://en.wikiquote.org/wiki/Lex_Luthor" target="_blank">Lex Luthor</a> has anchored is yacht in the Bahamas... <br>We think he is looking for a meteor fragment. Best monitor his movements for now.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.5471827, 25.032806] // icon position Lex Luthor
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<p>We are getting reports of a series of high-level assassinations in Singapore... <br>Only <a href="https://en.wikipedia.org/wiki/Deathstroke" target="_blank">Deathstroke</a> can operate with such deadly skill.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [103.7041593, 1.3143394] // icon position Deathstroke
                    }
                }
            ]
        }
    });

    villainsMap.addLayer({
        'id': 'layer-with-pulsing-dot',
        'type': 'symbol',
        'source': 'dot-point',
        'layout': {
            'icon-image': 'pulsing-dot'
        }
    });
    villainsMap.on('click', 'layer-with-pulsing-dot', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(villainsMap);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    villainsMap.on('mouseenter', 'layer-with-pulsing-dot', function () {
        villainsMap.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    villainsMap.on('mouseleave', 'layer-with-pulsing-dot', function () {
        villainsMap.getCanvas().style.cursor = '';
    });
});