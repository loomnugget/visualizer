function preload() {
  mySound = loadSound('https://mp3d.jamendo.com/download/track/1314413/mp32/');
}

function setup() {
  mySound.setVolume(0.5);
  mySound.play();
}
