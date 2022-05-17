class Walker {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
  }

  // update position
  update() {
    this.pos.x = this.pos.x + random(-3, 3);
    this.pos.y = this.pos.y + random(-3, 3);
  }

  show() {
    // stroke(0, 0, 100, 1); // white
    stroke(0); // black
    // stroke(100); // white
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}