// Get all keys
const keys = document.querySelectorAll('.key');

// Play notes
function playNote(event) {

    // Key code
    let audioKeyCode = getKeyCode(event);

    // Typed or pressed key
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)

    // If key exists


    // Play audio
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown";
    
    if(isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }

    return keyCode;
}

// Click with mouse
keys.forEach( (key) => {
    key.addEventListener('click', playNote);
})

// Keyboard type
window.addEventListener('keydown', playNote);