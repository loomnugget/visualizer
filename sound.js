'use strict';

var fft, mySound, analyzer, x, y;

function preload() {
  mySound = loadSound('https://mp3d.jamendo.com/download/track/1314413/mp32/');
}

function setup() {
  // Set up createCanvas
  createCanvas(500, 500, WEBGL);
  background(0);
  x = width/2;
  y = height/2;


  // Create new fft to analyze mp3
  fft = new p5.FFT();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mySound);

  // Play tunes
  mySound.setVolume(0.5);
  mySound.play();
}

function draw() {
  var rms = analyzer.getLevel();
  ellipse(x, y, 10+rms*50, 10+rms*50);
}
