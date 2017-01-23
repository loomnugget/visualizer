'use strict';

var fft, mySound, analyzer;

function preload() {
  mySound = loadSound('https://mp3d.jamendo.com/download/track/1314413/mp32/');
}

function setup() {
  // Set up createCanvas
  createCanvas(500, 500);
  background(0);

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
  ellipse(width/2, height/2, rms*500, rms*500);
}
