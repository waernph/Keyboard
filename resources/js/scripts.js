const context = new AudioContext();
const oscillator = context.createOscillator();
const oscTypeArray = ["sine", "square", "triangle", "sawtooth"];
oscillator.type = oscTypeArray[3];



function playC() {
    oscillator.frequency = 100;
    oscillator.connect(context.destination);
    oscillator.start();
}
function stopSound() {
    oscillator.stop();

}


document.querySelector("#c").addEventListener("mousedown", playC);
document.querySelector("#c").addEventListener("mouseup", stopSound);

