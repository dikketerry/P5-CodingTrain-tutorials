let bubble1;
let bubble2;

function setup() {
	createCanvas(600, 400);
	colorMode(HSB, 360, 100, 100, 1);
	bubble1 = new Bubble(200, 200, 40);
	bubble2 = new Bubble(400, 200, 20);
}

function draw() {
	background(0);
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
}
