import { toggleAudio } from './audioPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('audio');

    playButton.addEventListener('mouseenter', () => {
        playButton.classList.toggle('paused', !audio.paused);
    });

    playButton.addEventListener('click', () => {
        toggleAudio();
        // Usar setTimeout para esperar a que el estado de audio cambie
        setTimeout(() => {
            playButton.classList.toggle('paused', !audio.paused);
        }, 50);
    });
});
