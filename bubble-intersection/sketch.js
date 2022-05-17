let bubbles = [];
let unicorn;

function setup() {
	createCanvas(600, 400);
	colorMode(HSB, 360, 100, 100, 1);
	
	for (let i = 0; i < 900; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(3, 8);

		bubbles[i] = new Bubble(x, y, r);
	}

}

function draw() {
	background(0);

	for (let i = 0; i < bubbles.length - 1; i++) {
		bubbles[i].show();
		bubbles[i].move();

		let overlapping = false;

		for (let j = i + 1; j < bubbles.length; j++) {
			if (bubbles[i] !== bubbles[j] && bubbles[i].intersects(bubbles[j])) {
				overlapping = true;
			}
		}

		overlapping ? bubbles[i].changeColor(50) : bubbles[i].changeColor(100);
	}
}
