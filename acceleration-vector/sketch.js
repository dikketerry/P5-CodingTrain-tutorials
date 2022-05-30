let mover;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 1);
	// background(0, 0, 20, 1); // dark grey
	mover = new Mover(width/2, height/2);
}

function draw() {
	background(18); // dark grey

	if (mouseIsPressed) {
		let gravity = createVector(0, 0.1);
		mover.applyForce(gravity);
	}

	// let gravity = createVector(0, 1);
	// mover.applyForce(gravity);

	mover.update();
	mover.edges();
	mover.show();
}
