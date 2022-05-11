// Coding Train tutorial: https://www.youtube.com/watch?v=nMUMZ5YRxHI

function setup() {
	createCanvas(600, 600);
	colorMode(RGB, 255);
	background(0, 0, 10);
	pixelDensity(1);
	// colorMode(HSB, 360, 100, 100, 1);
	// background(0, 0, 10, 1);
}

function draw() {
	background(0, 0, 10);
	loadPixels();
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var startIndex = (x + y * width) * 4;
			pixels[startIndex + 0] = 0;
			pixels[startIndex + 1] = x;
			pixels[startIndex + 2] = y;
			pixels[startIndex + 3] = 127;
		}
	}
	updatePixels();
}

// TODO: check HSB mode for loadPixel
