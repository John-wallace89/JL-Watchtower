// Credit--- Mapbox https://docs.mapbox.com/mapbox-gl-js/example/add-image-animated/--
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obi13YWxsYWNlODkiLCJhIjoiY2tvdHNuaDNpMGVmejJvcWpuZGUzdmJmbiJ9.BOt8BK_I-TyL3DxXUeKPig';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/john-wallace89/ckoxcyrn00j2w17mqtb9xelyf',
    center: [0, 0],
    zoom: 1.5, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());


var size = 200;

// implementation of CustomLayerInterface to draw a pulsing dot icon on the map
var pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

    // get rendering context for the map canvas when layer is added to the map
    onAdd: function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    },

    // called once before every frame where the icon will be used
    render: function () {
        var duration = 1000;
        var t = (performance.now() % duration) / duration;

        var radius = (size / 2) * 0.3;
        var outerRadius = (size / 2) * 0.7 * t + radius;
        var context = this.context;

        // draw outer circle
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

        // draw inner circle
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

        // update this image's data with data from the canvas
        this.data = context.getImageData(
            0,
            0,
            this.width,
            this.height
        ).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
    }
};

map.on('load', function () {
    map.addImage('pulsing-dot', pulsingDot, {
        pixelRatio: 2
    });

    map.addSource('points', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [{
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [0, 0],
                }
            }]
        }
    });
    map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
            'icon-image': 'pulsing-dot'
        }
    });
});

let heroButton = document.getElementById('hero-btn');
heroButton.addEventListener('click', heroLocation);

function heroLocation() {

    let herosArray = ['superman', 'batman', 'wonder-woman', 'aquaman', 'flash', 'martian-manhunter'];
    let herosResult = herosArray[Math.floor(Math.random() * herosArray.length)];
    console.log(herosResult);

    if (herosResult === herosArray[0]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - Superman</h4>
            <h4>Location - Fortress of Solitude</h4>
            <h4>Co-ordinates - 90.00° N, 135.00° W</h4>
            <h4>Mission - Superman has gone back to the Fortress of solitude to find answers about Krypton, 
            his home world</h4>`);

    } else if (herosResult === herosArray[1]) {

        document.getElementById('hero-location').innerHTML =
            (`<img src="assets/images/unsplash_batman.jpg" style="height:200px;width:300px;" >
            <h4>Hero - Batman</h4>
            <h4>Location - Gotham City</h4>
            <h4>Co-ordinates:40.7128° N, 74.0060° W</h4>
            <h4>Mission - We've picked up reports from GCPD of explosions at ACE chemicals, 
            We've sent Batman to investigate</h4>`);

    } else if (herosResult === herosArray[2]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - Wonder Woman</h4>
            <h4>Location - Paris</h4>
            <h4>Co-ordinates - 48.8566° N, 2.3522° E</h4>
            <h4>Mission - We've sent Wonder Women to link up with Interpol to stop a 
            potential robbery at The Louvre</h4>`);

    } else if (herosResult === herosArray[3]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - Aquaman</h4>
            <h4>Location - Mariana Trench</h4>
            <h4>Co-ordinates - 11.3493° N, 142.1996° E</h4>
            <h4>Mission - We picked up a distress call from a deep sea exploration vessel, 
            Aquaman is coming to their aid</h4>`);

    } else if (herosResult === herosArray[4]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - The Flash</h4>
            <h4>Location - Central City</h4>
            <h4>Co-ordinates - 41.8781° N, 87.6298° W</h4>
            <h4>Mission - The Flash is in Central City, 
            following up a lead on a series of thefts in the downtown area.</h4>`);

    } else if (herosResult === herosArray[5]) {

        document.getElementById('hero-location').innerHTML =
            //Credit: https://codepen.io/anasandoval90/pen/jPXxaR?__cf_chl_jschl_tk__=3e6196e3b7f32394323bc8097265506c651868fd-1591480453-0-Ae-640MXtDRF1PrcznnUOAzc-P2rgSRxSlYIrrmR5aH6f2zoGgmL7Hxmb2_6MCuOU2f0o2GcvbvRPu7jp88anP1oSadtBEpzYPSVYcT2CVg-cQ15Ckg9lo_6m0bhyKEqfaMJx6p9STxX5eKiVLEAHGQn2xOC0OIT0OiV2HDXg5IJTOMjgMwkeH03RISNjISzw8kUfDzmiKxY_DdzzxkpKEh4hrJXRFV2aTEH7qKZRpEkRVW7_5OKA9aonK0Tsb_dOzv8kVHI79SfqHFPJCEk6hC3smKMjhi02jlJuzzci6jJRdc_eFy1QlCkhlAQ0NicCykIt0rRCedpfndRDjeEy5PuSq839amBFF-IvM-OzFR8
            (`<h2 class="intro-title blink" style="color: red; letter-spacing: 3px;">location not found</h2>
            <h4>Hero: Martian Manhunter</h4>
            <h4>Location: Unknown</h4>
            <h4>Not on Earth, <a href="scanner.html">click here</a> to activate long range scanners.</h4>`);

    } else {
        console.log("no hero found!");
    }
}
heroLocation();