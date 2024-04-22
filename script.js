// Initialize sound play counter
let soundPlayCount = 0;

// Function to update the sound play counter display
function updateSoundCounter() {
    const counterDisplay = document.getElementById('soundCounter');
    counterDisplay.textContent = soundPlayCount;
}

// Function to play the sound
function playSound() {
    var audio = new Audio('click.mp3'); // Replace with the path to your audio file
    audio.play();
    soundPlayCount++; // Increment the count each time the sound is played
    updateSoundCounter(); // Update the display
}

let intervalId = null; // To store the interval ID

// Function to start playing the sound at random intervals
function startAutomaticMode() {
    if (intervalId) clearInterval(intervalId); // Clear any existing interval
    intervalId = setInterval(() => {
        // Random time between 30 and 60 seconds
        const time = Math.random() * (60000 - 30000) + 30000;
        setTimeout(playSound, time); // Play the sound after 'time' has elapsed
    }, 60000); // Check every minute to potentially play sound
}

// Switch to manual mode and highlight the button
function manualMode() {
    if (intervalId) clearInterval(intervalId); // Stop automatic mode
    document.addEventListener('click', playSound); // Re-enable click to play
    document.getElementById('manualMode').classList.add('button-highlighted');
    document.getElementById('automaticMode').classList.remove('button-highlighted');
}

// Switch to automatic mode and highlight the button
function automaticModeFunc() {
    document.removeEventListener('click', playSound); // Disable click to play
    startAutomaticMode(); // Start automatic sound play
    document.getElementById('manualMode').classList.remove('button-highlighted');
    document.getElementById('automaticMode').classList.add('button-highlighted');
}

// Set up event listeners for the mode buttons
document.getElementById('manualMode').addEventListener('click', manualMode);
document.getElementById('automaticMode').addEventListener('click', automaticModeFunc);

// Start with the default mode and update the counter display
manualMode();
updateSoundCounter(); // Initialize the counter display
