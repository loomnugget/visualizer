'use strict';

const Particle = class Particle {
  constructor () {
    this.position = createVector(0,0);
    this.velocity = createVector(0,0);
    this.lifespan = 0;
  }
  update() {
    this.position.add(this.velocity);
  }
  draw() {
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, 10, 10);
  }
  run() {
    this.update();
    this.draw();
  }
}

let p;
function setup() {
  p  = new Particle();
  createCanvas(800, 800);
}

function draw() {
  background(35);
  p.run();
}
