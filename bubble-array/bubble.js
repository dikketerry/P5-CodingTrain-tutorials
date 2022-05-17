class Bubble {
	constructor(_x, _y, _r) {
		this.x = _x;
		this.y = _y;
		this.r = _r;
	}

	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(0, 100, 100, 1);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, this.r*2);
	}
}