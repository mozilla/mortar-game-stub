# Game Stub

This is a small game template including a basic render loop where you can move the player around.

This is part of the [mortar](https://github.com/mozilla/mortar/) template collection for building [Open Web Apps](https://developer.mozilla.org/en-US/Apps).


## Downloading

There are a few ways to get this template:

If you use [Git](http://www.git-scm.com/):

````bash
git clone https://github.com/mozilla/mortar-game-stub.git
````

Or download the latest version in this [ZIP file](https://github.com/mozilla/mortar-game-stub/archive/master.zip).


## Usage

Start a local server to simulate accessing the hosted app from the browser, and trying the *Install* button flow.

For example:

````bash
python -m SimpleHTTPServer 8000
````

then access `localhost:8000` or `your.computer.ip:8000` (for example, `192.168.0.25`) using Firefox (Desktop or Mobile), or the Browser app in a Firefox OS simulator (or device).

You'll need to use the IP address when using a physical device. Change the port accordingly, if you're running a webserver in this port already.


## Code walkthrough

The game logic is defined in `js/app.js`. This is where we define the player entity, and set up the render loop, and the input and install handlers. In the interest of keeping things tidy and easy to follow, we have extracted the code for `input` and `install` onto two files (`js/input.js` and `js/install.js`) that we then reference in `index.html`, right before `js/app.js`.

If you're interested in reading more about how game loops work, you are strongly advised to read [Anatomy of a video game](https://developer.mozilla.org/en-US/docs/Games/Anatomy), an article describing all these topics.
