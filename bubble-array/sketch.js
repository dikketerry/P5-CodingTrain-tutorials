let bubbles = [];

function setup() {
	createCanvas(600, 400);
	colorMode(HSB, 360, 100, 100, 1);

}

function mouseDragged() {
	let r = random(16, 48);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}

function draw() {
	background(0);
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].show();
		bubbles[i].move();
	}
}
