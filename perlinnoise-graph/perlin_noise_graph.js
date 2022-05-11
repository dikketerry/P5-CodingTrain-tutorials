var incr = 0.01; 		// to increment
var start = 0;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 1);
	background(0, 0, 10, 1); // gray
}

function draw() {
	background(0, 0, 30, 1);
	stroke(0, 0, 100, 1);
	noFill();
	
	beginShape();
	var offset = start;
	for (var x = 0; x < width; x++) {
		stroke(0, 0, 100, 1); // white

		// var y = random(height);		// random function
		// var y = noise(offset) * height;		// perlin noise function
		// var y = height/2 + sin(offset) * height/2; 	// sine function
		
		// var noizze = map(noise(offset), 0, 1, -50, 50);
		// var sinezz = map(sin(offset), -1, 1, 0, height);
		// var y = sinezz + noizze; // noised sine function
		// OR assign height to noise and arbitrary range to sine
		var noizze = map(noise(offset), 0, 1, 0, height);
		var sinezz = map(sin(offset), 0, 1, -20, 20);
		var y = sinezz + noizze; // sined noise function
		
		vertex(x, y);
		offset += incr;
	}
	endShape();
	start += incr;
	// noLoop();
}
