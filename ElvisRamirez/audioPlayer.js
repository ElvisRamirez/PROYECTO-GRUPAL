// Define una función llamada 'toggleAudio'
function toggleAudio() {
    // Obtiene el elemento de audio con el id 'audio' del DOM
    const audio = document.getElementById('audio');
    
    // Verifica si el audio está pausado
    if (audio.paused) {
        // Si el audio está pausado, lo reproduce
        audio.play();
    } else {
        // Si el audio está reproduciéndose, lo pausa
        audio.pause();
    }
}

// Exporta la función 'toggleAudio' para que pueda ser utilizada en otros módulos
export { toggleAudio };
