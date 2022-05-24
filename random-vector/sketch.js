// Coding Train tutorial: https://www.youtube.com/watch?v=nMUMZ5YRxHI

function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100, 1);
	background(0, 0, 10);
	// pixelDensity(1); 
	// colorMode(HSB, 360, 100, 100, 1);
	// background(0, 0, 10, 1);
}

function draw() {
	
	translate(width/2, height/2);

	// below vector is random but within a square as border.
	// let v = createVector(random(-100, 100), random(-100, 100));

	// static function call - below returns a unit vector in random 2d directions
	v = p5.Vector.random2D();
	// which we then multiply (as a unit vector is magnitue 1 px)
	v.mult(random(50, 100));

	strokeWeight(2);
	stroke(100, 0.3);
	line(0, 0, v.x, v.y);
	
}