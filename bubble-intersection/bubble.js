class Bubble {
	constructor(_x, _y, _r = 50) {
		this.x = _x;
		this.y = _y;
		this.r = _r;
		this.brightness = 100;
	}

	intersects(other) {
		let d = dist(this.x, this.y, other.x, other.y);
		return (d < this.r + other.r);
	}

	changeColor(bright) {
		this.brightness = bright;
	}

	contains(px, py) {
		let d = dist(px, py, this.x, this.t);
		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}

	move() {
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(-2, 2);
	}

	show() {
		stroke(0, 100, 100, 1);
		strokeWeight(2);
		fill(this.brightness, 0.5);
		ellipse(this.x, this.y, this.r*2);
	}
}