// Get all keys
const keys = document.querySelectorAll('.key');

// Play notes
function playNote(event) {
//   console.log(event.target.dataset.key);
    // Key code

    // Typed or pressed key

    // If key exists

    // Play audio
}

// Click with mouse
keys.forEach( (key) => {
    key.addEventListener('click', playNote);
})

// Keyboard type
window.addEventListener('keydown', playNote);