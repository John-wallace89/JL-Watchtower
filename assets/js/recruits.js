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
};

//Recruits Map Js
//Credit: https://docs.mapbox.com/mapbox-gl-js/example/forward-geocode-custom-data/
