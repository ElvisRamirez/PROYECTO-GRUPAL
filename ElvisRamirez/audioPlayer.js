// audioPlayer.js
function toggleAudio() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

export { toggleAudio };
