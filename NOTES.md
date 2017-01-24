#Summary
In the Web Audio API, each individual thing is represented as a node. The source of audio, effects, analysis, and output are all considered nodes that need to be connected together to perform various tasks.

To create visualizations, frequency and waveform data are extracted from the audio source using a Fast Fourier Transform.

# Frequency Analysis
`fftSize`
- represents the size of the FFT to determine frequncy domain
- must be non-zero power of 2 between 32 - 32768
- default is 2048
- the higher the value, the finer the analysis

`frequencyBinCount`
- read only - fftSize/2
- represents the number of data values available to use in the visualization
- `var dataArray = new Uint8Array(bufferLength);` - give the amount of data points

`smoothingTimeConstant`
- value between 0 and 1 (from jarring/quickly fluctuating to smooth)
- average between current buffer and last buffer the Analyser Node processed
- result is a much smoother set of value changes over time

`freqDomain`
- array of 32 bit floats representing the frequency domain, normalized between 0 and 1
- output indexes are mapped linearly between 0 and nyquist frequency (min rate that signal can be sampled without errors, 2x the highest frequency present in the signal)

`getByteFrequencyData`
- 8 bit unsigned units
- values are scaled to fit between `minDecibles` and `maxDecibles` on the analyzer node_modules
- can be tweaked to scale output
