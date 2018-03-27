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
