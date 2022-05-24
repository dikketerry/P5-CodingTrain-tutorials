
let walker;

function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100, 1);
	// background(0, 0, 20, 1); // dark grey
	walker = new Walker(width/2, height/2);
}

function draw() {
	background(18); // dark grey
	walker.show();
	walker.update();
}
