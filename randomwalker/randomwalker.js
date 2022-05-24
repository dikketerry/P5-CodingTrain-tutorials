class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, -1);
  }

  // update position
  update() {
    this.pos.add(this.vel);
  }

  show() {
    // stroke(0, 0, 100, 1); // white
    stroke(100); // black
    // stroke(100); // white
    strokeWeight(2);
    fill(0, 0, 100, 1);
    // point(this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 16);
  }
}