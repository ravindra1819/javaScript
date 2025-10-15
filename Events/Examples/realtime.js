// ====================
// EVENT THEORY SUMMARY
// ====================

// An event is an action or occurrence that happens in the browser that JS can respond to.
// Examples: clicking a button, submitting a form, resizing the window, etc.

// Types of Events:
// 1. Mouse Events: click, dblclick, mouseover, mousemove
// 2. Keyboard Events: keydown, keypress, keyup
// 3. Form Events: submit, change, focus, blur, input
// 4. Window Events: load, resize, scroll
// 5. Clipboard Events: copy, cut, paste
// 6. Touch Events: touchstart, touchmove, touchend

// Ways to Implement Events:
// a) Inline HTML events
// b) DOM Property method
// c) addEventListener() — preferred (supports multiple handlers, capturing/bubbling)


// ============================
// a. INLINE EVENT EXAMPLES
// ============================
function showAlert() {
  alert("Button Clicked using Inline Event!");
}

// Another Inline Example (defined globally)
function sayHello() {
  console.log("Hello from Inline Event!");
}


// ============================
// b. DOM PROPERTY METHOD EXAMPLES
// ============================
const domBtn = document.getElementById("domBtn");
domBtn.onmousedown = function () {
  console.log("Hovered using DOM Property Method!");
};

domBtn.onclick = function () {
  alert("Clicked using DOM Property Method!");
};


// ============================
// c. addEventListener EXAMPLES
// ============================

// 1️⃣ Login button click
document.getElementById("loginBtn").addEventListener("click", (e) => {
  console.log(`Clicked on: ${e.target.textContent}`);
});

// 2️⃣ Typing in search box
document.getElementById("searchBox").addEventListener("input", (e) => {
  console.log(`Searching for: ${e.target.value}`);
});

// 3️⃣ Form submission simulation
document.getElementById("submitBtn").addEventListener("click", () => {
  alert("Form Submitted Successfully!");
});

// 4️⃣ Theme toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  console.log("Theme Toggled!");
});

// 5️⃣ Double click event
document.getElementById("doubleBtn").addEventListener("dblclick", () => {
  alert("Double Click Detected!");
});

// 6️⃣ Hover box mouseover
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "purple";
  hoverBox.textContent = "Mouse Over!";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "lightcoral";
  hoverBox.textContent = "Hover over this box";
});

// 7️⃣ Window resize
window.addEventListener("resize", () => {
  console.log("Window resized!");
});

// 8️⃣ Clipboard copy event
document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText("Copied from Clipboard Example!");
  alert("Copied to Clipboard!");
});

// 9️⃣ Touch event (mobile)
document.getElementById("touchBtn").addEventListener("touchstart", () => {
  console.log("Touch started!");
});

// 🔟 Keyboard event for username
document.getElementById("username").addEventListener("keyup", (e) => {
  console.log(`Key pressed: ${e.key}`);
});


// ============================
// EVENT FLOW NOTES
// ============================
// Event Flow has 3 phases:
// 1. Capturing Phase – event travels from root to target
// 2. Target Phase – event reaches the target element
// 3. Bubbling Phase – event bubbles up from target to root

// Example: Demonstrating Bubbling
document.body.addEventListener("click", () => {
  console.log("Body Clicked - Bubbling Phase");
});

document.getElementById("loginBtn").addEventListener("click", () => {
  console.log("Login Button Clicked - Target Phase");
});