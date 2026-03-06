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
const powerBtn = document.querySelector("#powerBtn");


let volumeSet = 0.2;



function Oscillator(freq, detune, typeIndex, volume) {
    this.osc = context.createOscillator();
    this.gainNode = context.createGain();
    this.osc.type = oscTypeArray[typeIndex];
    this.osc.connect(this.gainNode);
    this.osc.frequency.setValueAtTime(freq, context.currentTime);
    this.osc.detune.setValueAtTime(detune, context.currentTime);
    this.gainNode.gain.setValueAtTime(volume, context.currentTime);
    this.gainNode.connect(context.destination);
    this.osc.start();
}

function stopOsc() {
    osc1.gainNode.gain.value = 0;
    osc2.gainNode.gain.value = 0;
}

let osc1;
let osc2;

powerBtn.addEventListener("click", () => {
    osc1 = new Oscillator(0, 0, 3, 0.2);
    osc2 = new Oscillator(0, 0, 3, 0.2);
})



cKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq.C4;
    osc2.osc.frequency.value = keyFreq.C4;

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
cKey.addEventListener("mouseup", stopOsc)
cKey.addEventListener("mouseout", stopOsc)

cSharpKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq["C#4"];
    osc2.osc.frequency.value = keyFreq["C#4"];

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
cSharpKey.addEventListener("mouseup", stopOsc)
cSharpKey.addEventListener("mouseout", stopOsc)

dKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq.D4;
    osc2.osc.frequency.value = keyFreq.D4;

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
dKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

dSharpKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq["D#4"];
    osc2.osc.frequency.value = keyFreq["D#4"];

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
dSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

eKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq.E4;
    osc2.osc.frequency.value = keyFreq.E4;

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
eKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

fKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq.F4;
    osc2.osc.frequency.value = keyFreq.F4;

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
fKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

fSharpKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq["F#4"];
    osc2.osc.frequency.value = keyFreq["F#4"];

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
fSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

gKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq.G4;
    osc2.osc.frequency.value = keyFreq.G4;

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
gKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

gSharpKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq["G#4"];
    osc2.osc.frequency.value = keyFreq["G#4"];

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
gSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})

aKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq.A4;
    osc2.osc.frequency.value = keyFreq.A4;

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
aKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})
aSharpKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq["A#4"];
    osc2.osc.frequency.value = keyFreq["A#4"];

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
aSharpKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})
bKey.addEventListener("mousedown", () => {
    osc1.osc.frequency.value = keyFreq.B4;
    osc2.osc.frequency.value = keyFreq.B4;

    osc1.gainNode.gain.value = volumeSet;
    osc2.gainNode.gain.value = volumeSet;
});
bKey.addEventListener("mouseup", () => {
    osc1.osc.stop();
    osc2.osc.stop();
})
