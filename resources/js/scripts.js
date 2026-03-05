const context = new AudioContext();

function playSound() {
    const oscillator = context.createOscillator();
    oscillator.type = "square";
    oscillator.frequency(440, context.currentTime);
    oscillator.connect(context.destination);
    oscillator.start();
}
playSound();