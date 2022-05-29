class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));

  }

  // update position
  update() {

    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos); 
    this.acc.setMag(1);

    this.vel.add(this.acc);
    this.vel.limit(5);
    
    this.pos.add(this.vel);
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