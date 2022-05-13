let x;
let y;

function setup() {
	createCanvas(400, 400);
	x = width/2;
	y = height/2;
	colorMode(HSB, 360, 100, 100, 1);
	background(0, 0, 20, 1);

	// w = new Walker();
}

function draw() {
	// background(0, 0, 20, 1);
	
	stroke(120, 60, 80, 1);
	strokeWeight(2);

	point(x, y);

	var r = floor(random(0, 4)); // 0 not really needed. floor ensure we have 4 possibilities (0, 1, 2, 3)

	switch (r) {
	case 0:
		x = x + 8;
		break;
	case 1:
		x = x - 8;
		break;
	case 2:
		y = y + 8;
		break;
	case 3:
		y = y - 8;
		break;
	}

	// bounce when reaching borders
	if (x < 0) {
		x = 0;
	}
	if (x > width) {
		x = width;
	}

	if (y < 0) {
		y = 0;
	}

	if (y > height) {
		y = height;
	}


	
	// w.step();
	// w.render();
}
