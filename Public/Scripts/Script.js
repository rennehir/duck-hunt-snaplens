// -----JS CODE-----
// @input SceneObject item

var birdsTapped = 0;
// hideNumbers();

function hideNumbers () {
    for (var i = 0; i < script.numbers.length; i++) {
        script.numbers[i].enabled = false;
    }
}

function randomNumber () {
    var min = -100;
    var max = 100;
    
    return Math.random()*(max - min) + min;
}

function randomPosition () {
    return new vec3(randomNumber(), randomNumber(), randomNumber())
}

function moveItem () {
    script.item.getTransform().setWorldPosition(randomPosition());
    birdsTapped++;
}

// Bind the function to the touch event.
var touchEvent = script.createEvent("TapEvent");
touchEvent.bind(moveItem);