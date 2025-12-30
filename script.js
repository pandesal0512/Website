console.log('JavaScript is working!');
const audio = document.getElementById('myAudio');
const button = document.getElementById('audioButton');

button.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        button.src = 'Image/SpringtrapDance.gif';
        
    } else {
        audio.pause();
        button.src = 'Image/Springtrap.png';
    }
});