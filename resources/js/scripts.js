const context = new AudioContext();
const oscTypeArray = ["sine", "square", "triangle", "sawtooth"];
const keyFreq = {
    "C4": 261.63,
    "C#4": 277.18,
    "D4": 293.66,
    "D#4": 311.13,
    "E4": 329.63,
    "F4": 349.23,
    "F#4": 369.99,
    "G4": 392.00,
    "G#4": 415.30,
    "A4": 440.00,
    "A#4": 466.16,
    "B4": 493.88
};
const cKey = document.querySelector("#c");
const cSharpKey = document.querySelector("#cSharp");
const dKey = document.querySelector("#d");
const dSharpKey = document.querySelector("#dSharp");
const eKey = document.querySelector("#e");
const fKey = document.querySelector("#f");
const fSharpKey = document.querySelector("#fSharp");
const gKey = document.querySelector("#g");
const gSharpKey = document.querySelector("#gSharp");
const aKey = document.querySelector("#a");
const aSharpKey = document.querySelector("#aSharp");
const bKey = document.querySelector("#b");






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
    osc1 = new Oscillator(keyFreq.C4, 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq.C4, 10, 3, 0.2);
});
cKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

cSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["C#4"], 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq["C#4"], 10, 3, 0.2);
});
cSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

dKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.D4, 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq.D4, 10, 3, 0.2);
});
dKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

dSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["D#4"], 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq["D#4"], 10, 3, 0.2);
});
dSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

eKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.E4, 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq.E4, 10, 3, 0.2);
});
eKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

fKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.F4, 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq.F4, 10, 3, 0.2);
});
fKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

fSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["F#4"], 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq["F#4"], 10, 3, 0.2);
});
fSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

gKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.G4, 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq.G4, 10, 3, 0.2);
});
gKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

gSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["G#4"], 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq["G#4"], 10, 3, 0.2);
});
gSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

aKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.A4, 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq.A4, 10, 3, 0.2);
});
aKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})
aSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["A#4"], 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq["A#4"], 10, 3, 0.2);
});
aSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})
bKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.B4, 0, 3, 0.2);
    osc2 = new Oscillator(keyFreq.B4, 10, 3, 0.2);
});
bKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})
