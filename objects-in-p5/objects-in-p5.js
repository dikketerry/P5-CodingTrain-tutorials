// define literal object
let circle = {
	x: 0,
	y: 200,
	diameter: 50
};

// let x = 0;
// let y = 200;
// let diameter = 50;
let r = 218;
let g = 160;
let b = 221;

function setup() {
	createCanvas(600, 400);
	colorMode(RGB, 255, 255, 255);
}

function draw() {
	background(r, g, b);

	// ellipse
	fill(250, 200, 200);	
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

	circle.x = circle.x + 1;
}
