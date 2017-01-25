'use strict';

// Extract data from audio source
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

// Connect node to audio source

// Set Custom max and min decibles
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

// Set up buffer
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;

// Generate data points to visualize
const dataArray = new Uint8Array(bufferLength);
// Retrieve data and copy into dataArray
analyser.getByteTimeDomainData(dataArray);
