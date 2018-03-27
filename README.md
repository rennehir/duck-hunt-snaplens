# duck-hunt-snaplens
Snapchat Lens created with Lens Studio. You will hunt birds by clicking them, and you have ten seconds to catch as many as you can.

## Tutorial

### Lens Studio by Snapchat

[Download and install Lens Studio](https://lensstudio.snapchat.com/)


### Create new project

Once Lens Studio is installed, open it and create a new project from template ```Look Around```

![Screenshot - new project](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot1.png)


### Adding resources

1. Remove unnecessary birds

![Screenshot - remove birds](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot2.png)


2. Add timer resource

Resources -> Add New -> Texture -> Animated from files...

![Screenshot - Add timer](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot3.png)

![Screenshot - Add timer](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot4.png)

![Screenshot - Add timer](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot5.png)

Then rename the imported resource as ```timer``` or something else more descriptive.


3. Repeat the previous step, but import counter instead of timer

4. Resources -> Add New -> Import files... -> ```result.png```


### Setting up the billboard

1. Objects -> Add New -> Billboard

![Screenshot - Add billboard](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot6.png)

2. Remove ```2D Sprite 1``` under ```Effects```

3. Highlight ```Effects```

4. Object -> Add New -> Sprite

5. Rename the added Sprite to ```timer```

6. Highlight ```timer``` and from the bottom-right section under Sprite options click the BaseTex property (should say ```Default```)

7. Choose ```timer```

![Screenshot - Set timer texture](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot7.png)

8. On top of the bottom-right section change ```Layers``` from ```Default``` to ```Orthographic```

9. Under the transform section, adjust position and scale accordingly.

![Screenshot - Transform](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot8.png)

10. Repeat steps 4 - 9 with ```counter```

11. Again, add a new Sprite, rename it to ```background```. Set Material -> Add New -> Unlit

12. Highlight ```Unlit``` from Resources and change BaseColor to green or whatever you like.

13. Select ```background``` again, resize and reposition.

14. Repeat steps 4 - 9 with ```result```

15. Repeat steps 4 - 9, but rename the Sprite as ```resultNumber``` and add ```counter``` as BaseTex

![Screenshot - Transform](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot9.png)

Now, you're project should look something like this.


### Setting up touch collision

1. Highlight ```Chick_FBX``` under ```LookAroundObjectController```, and then Objects -> Add New -> Mesh Visuals -> Box

![Screenshot - Transform](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot10.png)

2. Rename it to ```TouchCollision```

3. Resize and reposition it to cover just the whole bird

![Screenshot - TouchCollision](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot11.png)

4. Highlight ```TouchCollision``` and select Material 1. Add New -> Unlit

5. Highlight the newly added Unlit material from Resources

6. Uncheck ```Depth Test, Depth Write and Color Write``` to make the box invisible

7. Highlight ```TouchCollision```

8. From the bottom-right section, choose Add Component -> Touch. Then choose ```Mesh visual 1``` and select ```TouchCollision```


### Let's start coding

1. Highlight ```TouchCollision```

2. Add Component -> Script -> Add New -> Script

3. From Resources, choose ```Script```

4. Paste the below code to the script text field

```js
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
```

5. Apply Changes

6. Highlight ```TouchCollision```

7. From the bottom-right section under Script, match the following:

Item -> Chick_FBX
Counter -> counter
Timer -> timer
Result Text -> result
Result -> resultNumber
Result Bg -> background


### Did you find any bugs at this point?

Choose ```timer``` from Resources, and check ```Reverse``` and set duration to ```11,00```

![Screenshot - Timer reverse](https://raw.githubusercontent.com/rennehir/duck-hunt-snaplens/master/Resources/screenshots/screenshot12.png)
