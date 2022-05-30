class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prev = createVector(x, y); // to allow for drawing a line
  }

  // update position
  update() {
    // this.pos.add(this.vel);
    let step = p5.Vector.random2D();
    
    // a simple implementation of a Levy flight (making a big leap but with a small probability)
    let r = random(100);
    if (r < 2) {
      step.setMag(random(25, 100));  
    } else step.setMag(2);
    
    this.prev.set(this.pos);
    this.pos.add(step);
  }

  show() {
    stroke(100, 0.5); // white
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    
  }
}