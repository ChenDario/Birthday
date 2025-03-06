// Forza la riproduzione audio dopo l'interazione utente
document.addEventListener('click', function() {
    const audio = document.querySelector('audio');
    audio.play();
    audio.muted = false;
});


const container = document.getElementById("fireworksCanvas");
        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.zIndex = "-1";
        
const fireworks = new Fireworks.default(container, {
    speed: 2,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineWidth: { explosion: { min: 1, max: 2 }, trace: { min: 0.1, max: 0.2 } },
    hue: { min: 0, max: 360 },
    delay: { min: 30, max: 60 },
});

fireworks.start();