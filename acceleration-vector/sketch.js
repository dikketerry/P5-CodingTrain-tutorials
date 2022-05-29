let mover;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 1);
	// background(0, 0, 20, 1); // dark grey
	mover = new Mover(width/2, height/2);
}

function draw() {
	background(18); // dark grey
	mover.show();
	mover.update();
}
