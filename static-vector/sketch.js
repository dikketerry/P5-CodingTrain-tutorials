// Coding Train tutorial: https://www.youtube.com/watch?v=nMUMZ5YRxHI

function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100, 1);
	
	// pixelDensity(1); 
	// colorMode(HSB, 360, 100, 100, 1);
	// background(0, 0, 10, 1);
}

function draw() {
	background(0, 0, 10);

	let pos = createVector(200, 200);
	let mouse = createVector(mouseX, mouseY);

	let v = p5.Vector.sub(mouse, pos);
	let m = v.mag();
	v.div(m);
	v.mult(50);
	console.log(m);
	
	// v.normalize();

	translate(width/2, height/2);

	strokeWeight(2);
	stroke(100, 0.3);
	line(0, 0, v.x, v.y);
	
}