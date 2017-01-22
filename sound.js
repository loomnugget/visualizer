function preload() {
  mySound = loadSound('./assets/shootingstar.mp3');
}

function setup() {
  mySound.setVolume(0.5);
  mySound.play();
}
