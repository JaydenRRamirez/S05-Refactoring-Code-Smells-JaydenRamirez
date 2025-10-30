// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const incrementID = "increment",
  counterSpan = "counter",
  header = "CMPM 121 Project";

function updateUI(counterDisplay: HTMLSpanElement) {
  // Update the counter display
  counterDisplay.innerHTML = `${c}`;

  // Update the document title
  document.title = "Clicked " + c;
  document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
}

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${header}</h1>
    <p>Counter: <span id="${counterSpan}">0</span></p>
    <button id="${incrementID}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
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
    c++;
    updateUI(counterElement);
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    // Decrease the counter by 1
    c--;
    updateUI(counterElement);
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    // Reset the counter to 0
    c = 0;
    updateUI(counterElement);
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
