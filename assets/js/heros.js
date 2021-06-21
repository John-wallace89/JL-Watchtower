/*jshint esversion: 6 */

// Credit--- Mapbox https://docs.mapbox.com/mapbox-gl-js/--
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obi13YWxsYWNlODkiLCJhIjoiY2tvdHNuaDNpMGVmejJvcWpuZGUzdmJmbiJ9.BOt8BK_I-TyL3DxXUeKPig';
let heroMap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/john-wallace89/ckoxcyrn00j2w17mqtb9xelyf',
    center: [0, 0],
    zoom: 1, // starting zoom
});

heroMap.addControl(new mapboxgl.NavigationControl());

let heroButton = document.getElementById('hero-btn');
heroButton('click', heroLocation);


function heroLocation() {

    let herosArray = ['superman', 'batman', 'wonder-woman', 'aquaman', 'flash', 'martian-manhunter'];
    let herosResult = herosArray[Math.floor(Math.random() * herosArray.length)];
    console.log(herosResult);

    if (herosResult === herosArray[0]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - Superman</h4>
            <h4>Location - Fortress of Solitude</h4>
            <h4>Co-ordinates - 76.2506° N, 100.1140° W</h4>
            <h4>Mission - Superman has gone back to the Fortress of solitude to find answers about Krypton, 
            his home world</h4>
            <h4>Click again to find another hero!</h4>`);
        let marker = new mapboxgl.Marker()
            .setLngLat([-100, 76])
            .addTo(heroMap); // add the marker to the map
        heroMap.flyTo({
            center: [-100, 76],
            zoom: 3,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        document.getElementById('map').classList.remove('hide');
        herosArray.shift();

    } else if (herosResult === herosArray[1]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - Batman</h4>
            <h4>Location - Gotham City</h4>
            <h4>Co-ordinates - 40.7128° N, 74.0060° W</h4>
            <h4>Mission - We've picked up reports from GCPD of explosions at ACE chemicals, 
            We've sent Batman to investigate</h4>
            <h4>Click again to find another hero!</h4>`);
        let marker = new mapboxgl.Marker()
            .setLngLat([-74, 40])
            .addTo(heroMap); // add the marker to the map
        heroMap.flyTo({
            center: [-74.5, 40],
            zoom: 3,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        document.getElementById('map').classList.remove('hide');
        herosArray.splice(1);

    } else if (herosResult === herosArray[2]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - Wonder Woman</h4>
            <h4>Location - Paris</h4>
            <h4>Co-ordinates - 48.8566° N, 2.3522° E</h4>
            <h4>Mission - We've sent Wonder Women to link up with Interpol to stop a 
            potential robbery at The Louvre</h4>
            <h4>Click again to find another hero!</h4>`);
        let marker = new mapboxgl.Marker()
            .setLngLat([2.3, 48])
            .addTo(heroMap); // add the marker to the map
        heroMap.flyTo({
            center: [2.3, 48],
            zoom: 3,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        document.getElementById('map').classList.remove('hide');
        herosArray.splice(2);

    } else if (herosResult === herosArray[3]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - Aquaman</h4>
            <h4>Location - Mariana Trench</h4>
            <h4>Co-ordinates - 11.3493° N, 142.1996° E</h4>
            <h4>Mission - We picked up a distress call from a deep sea exploration vessel, 
            Aquaman is coming to their aid</h4>
            <h4>Click again to find another hero!</h4>`);
        let marker = new mapboxgl.Marker()
            .setLngLat([142, 11.3])
            .addTo(heroMap); // add the marker to the map
        heroMap.flyTo({
            center: [142, 11.3],
            zoom: 3,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        document.getElementById('map').classList.remove('hide');
        herosArray.splice(3);

    } else if (herosResult === herosArray[4]) {

        document.getElementById('hero-location').innerHTML =
            (`<h4>Hero - The Flash</h4>
            <h4>Location - Central City</h4>
            <h4>Co-ordinates - 41.8781° N, 87.6298° W</h4>
            <h4>Mission - The Flash is in Central City, 
            following up a lead on a series of thefts in the downtown area.</h4>
            <h4>Click again to find another hero!</h4>`);
        let marker = new mapboxgl.Marker()
            .setLngLat([-87, 41.8])
            .addTo(heroMap); // add the marker to the map
        heroMap.flyTo({
            center: [-87, 41.8],
            zoom: 3,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        document.getElementById('map').classList.remove('hide');
        herosArray.splice(4);

    } else if (herosResult === herosArray[5]) {

        document.getElementById('hero-location').innerHTML =
            //Credit: https://codepen.io/anasandoval90/pen/jPXxaR?__cf_chl_jschl_tk__=3e6196e3b7f32394323bc8097265506c651868fd-1591480453-0-Ae-640MXtDRF1PrcznnUOAzc-P2rgSRxSlYIrrmR5aH6f2zoGgmL7Hxmb2_6MCuOU2f0o2GcvbvRPu7jp88anP1oSadtBEpzYPSVYcT2CVg-cQ15Ckg9lo_6m0bhyKEqfaMJx6p9STxX5eKiVLEAHGQn2xOC0OIT0OiV2HDXg5IJTOMjgMwkeH03RISNjISzw8kUfDzmiKxY_DdzzxkpKEh4hrJXRFV2aTEH7qKZRpEkRVW7_5OKA9aonK0Tsb_dOzv8kVHI79SfqHFPJCEk6hC3smKMjhi02jlJuzzci6jJRdc_eFy1QlCkhlAQ0NicCykIt0rRCedpfndRDjeEy5PuSq839amBFF-IvM-OzFR8
            (`<h2 class="intro-title blink" style="color: red; letter-spacing: 3px;">location not found</h2>
            <h4>Hero: Martian Manhunter</h4>
            <h4>Location: Unknown</h4>
            <h4>Not on Earth, <a href="scanner.html">click here</a> to activate long range scanners.</h4>
            <h4>Click again to find another hero!</h4>`);
        document.getElementById('map').classList.add('hide');
        herosArray.splice(5);

    } else {
        console.log("no hero found!");
    }
}
heroLocation();