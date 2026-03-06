const context = new AudioContext();

const oscTypeArray = ["sine", "square", "triangle", "sawtooth"];

const gainNode = context.createGain();
gainNode.gain.setValueAtTime(0.2, context.currentTime);

const cKey = document.querySelector("#c");




function Oscillator(freq, detune, typeIndex) {
    this.osc = context.createOscillator();
    this.osc.type = oscTypeArray[typeIndex];
    this.osc.connect(gainNode);
    this.osc.frequency.setValueAtTime(freq, context.currentTime);
    this.osc.detune.setValueAtTime(detune, context.currentTime);
    this.osc.start(0);
}


function playC() {
    const osc1 = new Oscillator(440, 0, 3);
    const osc2 = new Oscillator(440, 10, 3);
}


gainNode.connect(context.destination);




cKey.addEventListener("mousedown", playC);

