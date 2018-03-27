// -----JS CODE-----
// @input SceneObject item
// @input Component.SpriteVisual counter
// @input Component.SpriteVisual timer
// @input Component.SpriteVisual resultText
// @input Component.SpriteVisual result
// @input Component.SpriteVisual resultBg

var counterControl = script.counter.mainPass.baseTex.control;
var timerControl = script.timer.mainPass.baseTex.control;
var birdsTapped = 0;

// Hide results
script.resultText.enabled = false;
script.result.enabled = false;
script.resultBg.enabled = false;

// Set counter to zero
counterControl.pauseAtFrame(0);
timerControl.pauseAtFrame(0);

// Bind the function to the touch event.
var touchEvent = script.createEvent("TapEvent");
touchEvent.bind(moveItem);

// Bind the timeout function to delayed event.
var timeoutEvent = script.createEvent("DelayedCallbackEvent");
timeoutEvent.bind(function(eventData) {
    timerControl.pause();
    
    // Show results
    script.resultText.enabled = true;
    script.result.enabled = true;
    script.resultBg.enabled = true;
    
    // Hide timer, counter and item
    script.timer.enabled = false;
    script.counter.enabled = false;
    script.item.enabled = false;
});

// Move bird, increase counter and show the amount of tapped birds
function moveItem () {
    if (birdsTapped === 0) {
        timerControl.play(1, 0.0);
        timeoutEvent.reset(10);
    }
    script.item.getTransform().setWorldPosition(randomPosition());
    birdsTapped++;
    counterControl.pauseAtFrame(birdsTapped);
}

function randomPosition () {
    var x = randomNumber(-25, 25);
    var y = randomNumber(-25,25);
    var z = randomNumber(-150, -50);
    return new vec3(x, y, z);
}

function randomNumber (min, max) {
    return Math.random()*(max - min) + min;
}
