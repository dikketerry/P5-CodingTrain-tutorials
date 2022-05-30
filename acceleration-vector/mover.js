class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

  }

  applyForce(force) {
    this.acc = force;
  }

  edges() {
    if (this.pos.y >= height) {
      this.pos.y = height;
      this.vel.y *= -1;
    }
  }

  // update position
  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos); 
    // this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    // stroke(0, 0, 100, 1); // white
    stroke(100); // white
    // stroke(100); // white
    strokeWeight(2);
    fill(100, 0.5);
    // point(this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}