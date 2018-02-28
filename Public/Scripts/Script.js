// -----JS CODE-----
// @input SceneObject item
// @input SceneObject[] numbers

var birdsTapped = 0;
hideNumbers();

function hideNumbers () {
    for (var i = 0; i < script.numbers.length; i++) {
        script.numbers[i].enabled = false;
    }
}

function randomNumber (min, max) {
    return Math.random()*(max - min) + min;
}

function randomPosition () {
    return new vec3(randomNumber(-25, 25), randomNumber(-25,25), randomNumber(-150, -50));
}

function moveItem () {
    script.item.getTransform().setWorldPosition(randomPosition());
    if (birdsTapped < script.numbers.length) {
        hideNumbers();
        script.numbers[birdsTapped].enabled = true;
        birdsTapped++;
    }
}

// Bind the function to the touch event.
var touchEvent = script.createEvent("TapEvent");
touchEvent.bind(moveItem);