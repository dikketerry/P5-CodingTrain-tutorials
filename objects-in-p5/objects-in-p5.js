class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.noiseTimeX = 0;
    this.noiseTimeY = 999;
    this.incr = 0.02;
    this.xStep = 0;
    this.yStep = 0;
  }

  step() {
    let noiseValX = noise(noiseTimeX);
    let noiseValY = noise(noiseTimeY);
    this.noiseTimeX = noiseTimeX + incr;
    this.noiseTimeY = noiseTimeY + incr;

    this.xStep = map(noiseValX, 0, 1, -9, 9);
    this.yStep = map(noiseValY, 0, 1, -9, 9);

    x = x + xStep;
    y = y + yStep;
    
    x = constrain(x, 0, width-1);
    y = constrain(y, 0, height-1);
  }

  render() {
    stroke(0, 100, 100, 1);
    strokeWeight(3);
    ellipse(x, y, 3, 3);
  }
  
}