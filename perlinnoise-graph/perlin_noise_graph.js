// var offset1 = 0;
// var offset2 = 10000;

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
	var offset = 0;
	for (var x = 0; x < width; x++) {
		stroke(0, 0, 100, 1); // white
		// var y = random(height);
		var y = noise(offset) * height;
		vertex(x, y);
		offset += 0.01;
	}
	endShape();
	noLoop();
}
