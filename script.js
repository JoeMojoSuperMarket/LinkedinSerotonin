// Initialize sound play counter
let soundPlayCount = 0;

// Function to update the sound play counter display
function updateSoundCounter() {
    const counterDisplay = document.getElementById('soundCounter');
    counterDisplay.textContent = soundPlayCount;

    // Update the browser tab title with the notification count
    document.title = `(${soundPlayCount}) Dopamine Hits`;
}

// Function to play the sound
function playSound() {
    var audio = new Audio('click.mp3'); // Replace with the path to your audio file
    audio.play();
    soundPlayCount++; // Increment the count each time the sound is played
    updateSoundCounter(); // Update the display and the tab title
}

let automaticMode = false; // State to track if automatic mode is on
let intervalId = null; // To store the interval ID

// Function to toggle active class on buttons
function toggleActiveClass() {
    manualModeBtn.classList.toggle('active', !automaticMode);
    automaticModeBtn.classList.toggle('active', automaticMode);
}

// Function to start playing the sound at random intervals
function startAutomaticMode() {
    if (intervalId) clearInterval(intervalId); // Clear any existing interval
    automaticMode = true; // Update mode state
    intervalId = setInterval(playSound, Math.random() * (60000 - 30000) + 30000); // Random interval between 30-60 seconds
    toggleActiveClass(); // Update button classes
}

// Switch to manual mode and highlight the button
function manualMode() {
    if (intervalId) clearInterval(intervalId); // Stop automatic mode
    automaticMode = false; // Update mode state
    document.addEventListener('click', playSound); // Re-enable click to play
    toggleActiveClass(); // Update button classes
}

// Get both buttons
const manualModeBtn = document.getElementById('manualMode');
const automaticModeBtn = document.getElementById('automaticMode');

// Add event listeners to the buttons
manualModeBtn.addEventListener('click', manualMode);
automaticModeBtn.addEventListener('click', startAutomaticMode);

// Start with the default mode and update the counter display
manualMode();
updateSoundCounter(); // Initialize the counter display

// Script to toggle active class on buttons
const manualButton = document.getElementById('manualMode');
const automaticButton = document.getElementById('automaticMode');

manualButton.addEventListener('click', function() {
    manualButton.classList.add('active');
    automaticButton.classList.remove('active');
});

automaticButton.addEventListener('click', function() {
    automaticButton.classList.add('active');
    manualButton.classList.remove('active');
});