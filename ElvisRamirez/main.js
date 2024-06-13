// Importa la función 'toggleAudio' desde el archivo 'audioPlayer.js'
import { toggleAudio } from './audioPlayer.js';

// Ejecuta la función cuando el DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el elemento del botón de reproducción por su id
    const playButton = document.getElementById('playButton');
    // Obtiene el elemento de audio por su id
    const audio = document.getElementById('audio');

    // Añade un event listener para el evento 'mouseenter' en el botón de reproducción
    playButton.addEventListener('mouseenter', () => {
        // Alterna la clase 'paused' dependiendo del estado del audio
        playButton.classList.toggle('paused', !audio.paused);
    });

    // Añade un event listener para el evento 'click' en el botón de reproducción
    playButton.addEventListener('click', () => {
        // Llama a la función 'toggleAudio' para reproducir o pausar el audio
        toggleAudio();
        // Usa setTimeout para esperar a que el estado del audio cambie
        setTimeout(() => {
            // Alterna la clase 'paused' dependiendo del nuevo estado del audio
            playButton.classList.toggle('paused', !audio.paused);
        }, 50); // Espera 50 milisegundos antes de ejecutar la función
    });
});
