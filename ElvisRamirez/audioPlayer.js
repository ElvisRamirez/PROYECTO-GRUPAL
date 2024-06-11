// audioPlayer.js
const audio = document.getElementById('audio');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

export { toggleAudio };
