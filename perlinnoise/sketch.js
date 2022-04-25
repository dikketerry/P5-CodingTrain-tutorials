let w;

function setup() {
	createCanvas(600, 800);
	colorMode(HSB, 360, 100, 100, 1);
	background(0, 100, 0, 1);

	w = new Walker();
}

function draw() {
	background(0, 100, 0, 1);
	w.step();
	w.render();
}
