const context = new AudioContext();
const oscTypeArray = ["sine", "square", "triangle", "sawtooth"]; //Array med typ ljudvågor
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
}; //Dict med frekvenser för varje not.
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
const allKeys = document.querySelectorAll(".all-keys")

let volumeSet = 0.2; //För att kunna ändra volym i webappen senare.



function Oscillator(freq, detune, typeIndex, volume) {
    this.osc = context.createOscillator(); //Skapa ny oscillator-nod
    this.gainNode = context.createGain(); //Skapa gain(volym)-nod
    this.osc.type = oscTypeArray[typeIndex]; //Sätt typ av ljudvåg, hämtas av array
    this.osc.connect(this.gainNode); // Koppla oscillator-noden till gain-noden.
    this.osc.frequency.setValueAtTime(freq, context.currentTime); //Sätt frekvens för oscillatorn
    this.osc.detune.setValueAtTime(detune, context.currentTime); //Sätt detune för oscillatorn i semitones(tror jag)
    this.gainNode.gain.setValueAtTime(volume, context.currentTime); //Sätt gain(volym) på gain-noden.
    this.gainNode.connect(context.destination); //Koppla gain-noden till destination, kan nog liknas vid ljudutgång.
    this.osc.start(); // Starta oscillatorn.
}

let osc1;
let osc2;

function stopOsc() {
    osc1.osc.stop();
    osc2.osc.stop();
}


cKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.C4, 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq.C4, 10, 3, volumeSet);
});
cKey.addEventListener("mouseup", stopOsc)
cKey.addEventListener("mouseout", stopOsc)

cSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["C#4"], 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq["C#4"], 10, 3, volumeSet);
});

dKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.D4, 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq.D4, 10, 3, volumeSet);
});

dSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["D#4"], 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq["D#4"], 10, 3, volumeSet);
});


eKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.E4, 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq.E4, 10, 3, volumeSet);
});


fKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.F4, 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq.F4, 10, 3, volumeSet);
});

fSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["F#4"], 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq["F#4"], 10, 3, volumeSet);
});

gKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.G4, 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq.G4, 10, 3, volumeSet);
});

gSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["G#4"], 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq["G#4"], 10, 3, volumeSet);
});


aKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.A4, 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq.A4, 10, 3, volumeSet);

});

aSharpKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq["A#4"], 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq["A#4"], 10, 3, volumeSet);
});

bKey.addEventListener("mousedown", () => {
    osc1 = new Oscillator(keyFreq.B4, 0, 3, volumeSet);
    osc2 = new Oscillator(keyFreq.B4, 10, 3, volumeSet);
});


//Alla tangenter loopas igenom med event listener för att avgöra om musknappen höjs eller musen flyttas från tangenten.
allKeys.forEach(key => {
    key.addEventListener("mouseup", stopOsc);
    key.addEventListener("mouseout", stopOsc);
});