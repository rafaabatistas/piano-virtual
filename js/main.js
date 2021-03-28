// Get all keys
const keys = document.querySelectorAll('.key');

// Play notes
function playNote(event) {

    // Key code
    let audioKeyCode = getKeyCode(event);

    // Typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // If key exists
    const isKeyExists = key;

    if(!isKeyExists) {
        return;
    }

    // Play audio
    addPlayingClass(key);
    playAudio(audioKeyCode);
}

function addPlayingClass(key) {
    key.classList.add('playing');
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

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`); 
    audio.currentTime = 0;
    audio.play();
}

function removePlayingClass(event) {
    event.target.classList.remove('playing');
}

function regiterEvents() {

    // Click with mouse
    keys.forEach( (key) => {
        key.addEventListener('click', playNote);
        key.addEventListener('transitionend', removePlayingClass)
    })

    // Keyboard type
    window.addEventListener('keydown', playNote);

}

window.addEventListener('load', regiterEvents);