const context = new AudioContext();
const oscTypeArray = ["sine", "square", "triangle", "sawtooth"];
const cKey = document.querySelector("#c");




function Oscillator(freq, detune, typeIndex, volume) {
    this.osc = context.createOscillator();
    const gainNode = context.createGain();
    this.osc.type = oscTypeArray[typeIndex];
    this.osc.connect(gainNode);   
    this.osc.frequency.setValueAtTime(freq, context.currentTime);
    this.osc.detune.setValueAtTime(detune, context.currentTime);
    gainNode.gain.setValueAtTime(volume, context.currentTime);
    gainNode.connect(context.destination);
    this.osc.start(0);
}

let osc1;
let osc2;

cKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(440, 0, 3, 0.2);
    osc2 = new Oscillator(440, 10, 3, 0.2);
});
cKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

