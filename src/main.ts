// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counterValue = 0;

// These constants are for button IDs and heading text
const incrementID = "increment",
  counterSpan = "counter",
  decrementID = "dec",
  resetID = "reset",
  colorOdd = "pink",
  colorEven = "lightblue",
  header = "CMPM 121 Project";

function updateUI(counterDisplay: HTMLSpanElement) {
  // Update the counter display
  counterDisplay.innerHTML = `${counterValue}`;

  // Update the document title
  document.title = "Clicked " + counterValue;
  document.body.style.backgroundColor = counterValue % 2 ? colorOdd : colorEven;
}

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${header}</h1>
    <p>Counter: <span id="${counterSpan}">0</span></p>
    <button id="${incrementID}">Click Me!</button>
    <button id="${decrementID}">Decrement</button>
    <button id="${resetID}">Reset</button>
  `;

  // Get the increment button element from the document
  const incrementButton = document.getElementById(incrementID);
  // Get the decrement button element from the document
  const decrementButton = document.getElementById("dec");
  // Get the reset button element from the document
  const resetButton = document.getElementById("reset");
  // Get the counter span element from the document
  const counterElement = document.getElementById(counterSpan);

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counterElement) {
    return;
  }

  // Add click event to the increment button
  incrementButton.addEventListener("click", () => {
    // Increase the counter by 1
    counterValue++;
    updateUI(counterElement);
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    // Decrease the counter by 1
    counterValue--;
    updateUI(counterElement);
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    // Reset the counter to 0
    counterValue = 0;
    updateUI(counterElement);
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
