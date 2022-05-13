// Coding Train tutorial: https://www.youtube.com/watch?v=ikwNrFvnL3g&t=0s

var incr = 0.01; 		// to increment

function setup() {
	createCanvas(600, 600);
	pixelDensity(1);
	// colorMode(HSB, 360, 100, 100, 1);
	colorMode(RGB, 255, 255, 255);
	background(51); // gray
}

function draw() {
	var yOffset = 0;

	loadPixels();
	for (var y = 0; y < height; y++) {
		var xOffset = 0;

		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4;
			noiseDetail(8, 0.4); // param1 represents octaves over which Perlin noise is calculated. param2 represents the falloff amount that each octave is contributing to the noise. default values are 4 octaves with 0.5 falloff (octave contributes 50% of its predecessing octave; 1st octave initiates with 50%)
			var noizze = noise(xOffset, yOffset) * 255;
			
			pixels[index+0] = noizze;
			pixels[index+1] = noizze;
			pixels[index+2] = noizze;
			pixels[index+3] = 255;

			xOffset += incr;
		}

		yOffset += incr;
		
	}
	updatePixels();
	// noLoop();
}
