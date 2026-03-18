
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

//Tangenterna som har ett värde som hämtas från keyFreq.
const keyPressed = {
    "a": keyFreq.C4,
    "w": keyFreq["C#4"],
    "s": keyFreq.D4,
    "e": keyFreq["D#4"],
    "d": keyFreq.E4,
    "f": keyFreq.F4,
    "t": keyFreq["F#4"],
    "g": keyFreq.G4,
    "y": keyFreq["G#4"],
    "h": keyFreq.A4,
    "u": keyFreq["A#4"],
    "j": keyFreq.B4
}

const allKeys = document.querySelectorAll(".all-keys");

// DISPLAY  CONTENT
const rowOne = document.querySelector("#row1");
const rowTwo = document.querySelector("#row2");
const rowThree = document.querySelector("#row3");
const rowFour = document.querySelector("#row4");
const display = document.querySelector(".display");
const logoArt = document.querySelector("#logo");

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
let keyIsDown = false;

function stopOsc() {
    osc1.osc.stop();
    osc2.osc.stop();
}
//Eventlistener för att trigga vid knapptryckning. Knappen som trycks ner är k.key.
//if (!keyIsDown) används för att motverka multipla triggningar vid nedhållen tangent.
document.addEventListener("keydown", (k) => {
    //if (!keyIsDown) {
        if (k.repeat) {
            return;
        }
        keyIsDown = true;
        osc1 = new Oscillator(keyPressed[k.key], 0, 3, volumeSet);
        osc2 = new Oscillator(keyPressed[k.key], 10, 3, volumeSet);
    //}
}
);

document.addEventListener("keyup", (k) => {
    keyIsDown = false;
    k.disabled = false;
    stopOsc();
});


// Alla tangenter lyssnas på och får value från HTML vid pointerdown
allKeys.forEach(key => {
    key.addEventListener("pointerdown", () => {
        osc1 = new Oscillator(keyFreq[key.value], 0, 3, volumeSet);
        osc2 = new Oscillator(keyFreq[key.value], 10, 3, volumeSet);
    })
});


//Alla tangenter loopas igenom med event listener för att avgöra om musknappen höjs eller musen flyttas från tangenten.
allKeys.forEach(key => {
    key.addEventListener("pointerup", stopOsc);
    key.addEventListener("pointerout", stopOsc);
});



rowOne.style.opacity = "0";
rowTwo.style.opacity = "0";
rowThree.style.opacity = "0";
rowFour.style.opacity = "0";
logoArt.style.opacity = "0";
logoArt.innerHTML = "wrn";
display.style.opacity = "0";

let o = 0;
let intervallID = setInterval(() => {
    display.style.opacity = `${o}`;
    o += 0.1;
    if (o >= 1) {
        console.log("clear");
        clearInterval(intervallID);
        o = 0;
        intervallID = setInterval(() => {
            logoArt.style.opacity = `${o}`
            o += 0.1;
            if (o >= 1) {
                clearInterval(intervallID);
            }
        }, 200);
    }
}, 100);


