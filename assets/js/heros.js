// Credit--- Mapbox https://docs.mapbox.com/mapbox-gl-js/example/add-image-animated/--
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obi13YWxsYWNlODkiLCJhIjoiY2tvdHNuaDNpMGVmejJvcWpuZGUzdmJmbiJ9.BOt8BK_I-TyL3DxXUeKPig';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/john-wallace89/ckoxcyrn00j2w17mqtb9xelyf',
center: [-74.5, 40],
zoom: 1, // starting zoom
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
map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
 
map.addSource('points', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-74, 50],
}
}
]
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

function heroLocation () {
    let herosArray = ["superman", "batman", "wonder-woman", "aquaman", "flash", "martian-manhunter"];
    for (i = 0; i < herosArray.length, i++;);
    let herosResult = herosArray[i];

    console.log (herosResult);

    if (herosResult === herosArray["superman"]) {
        document.getElementsByClassName("hero-location").innerHTML = 
        (`<h6>Location: Fortress of Solitude</h6><br>
        <h6>Hero: Superman</h6><br>
        <h6>Co-ordinates: 90.00° N, 135.00° W</h6>`);
    } else {
        console.log("not superman!");
    }
}

heroLocation(event);