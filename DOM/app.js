// ============================================
// 🌐 DOM SELECTORS
// ============================================

// getElementsByTagName
const anchorTags = document.getElementsByTagName("a");
console.log("All Anchor Tags:", anchorTags);

// getElementsByClassName
const busCards = document.getElementsByClassName("bus-card");
console.log("All Bus Cards:", busCards);

// getElementById
const fromCity = document.getElementById("fromCity");
const toCity = document.getElementById("toCity");
console.log("From City:", fromCity, "To City:", toCity);

// querySelector (returns first match)
const firstBusName = document.querySelector(".bus-card .bus-name");
console.log("First Bus Name:", firstBusName);

// querySelectorAll (returns NodeList)
const allBusNames = document.querySelectorAll(".bus-card > div > .bus-name");
console.log("All Bus Names:", allBusNames);


// ============================================
// 🧱 DOM MANIPULATION (CRUD)
// ============================================

// --- CREATE ---
const loginItem = document.createElement("li");
loginItem.innerHTML = `<a href="#" class="hover:underline">Login</a>`;
console.log("Created Element:", loginItem);


const selfPortal = document.createElement("li");
selfPortal.innerHTML = `<a href="#" class="hover:underline">Portal</a>`;
console.log("Created Element:", selfPortal);

// // --- READ & UPDATE ---
const navList = document.getElementById("navList");
const offersItem = document.getElementById("offers");

// // // Read text content
// // console.log("Before Update - Offers Text:", offersItem.textContent);

// // // Update text content
// // offersItem.textContent = "Mega Offers";
// // console.log("After Update - Offers Text:", offersItem.textContent);

// // --- INSERT ---
// navList.insertBefore(loginItem, offersItem); // Insert Login before Offers
// console.log("Inserted 'Login' before 'Offers'");


// // ============================================
// // 🔄 DOM MANIPULATION - REPLACE
// // ============================================

// // 1️⃣ Modern Way: replaceWith()
// const newDealsItem = document.createElement("li");
// newDealsItem.innerHTML = `<a href="#" class="hover:underline text-yellow-500 font-semibold">Deals</a>`;

// // Replace "Offers" with "Deals"
// offersItem.replaceWith(newDealsItem);
// console.log("Replaced 'Offers' with 'Deals' using replaceWith()");


// // 2️⃣ Traditional Way: replaceChild()
// const newContactItem = document.createElement("li");
// newContactItem.innerHTML = `<a href="#" class="hover:underline text-green-500 font-semibold">Support</a>`;

// // Replace last item (Contact) with Support
// const oldContactItem = navList.lastElementChild;
// navList.replaceChild(newContactItem, oldContactItem);
// console.log("Replaced 'Contact' with 'Support' using replaceChild()");

// // ============================================
// // ❌ DOM DELETION (remove / removeChild)
// // ============================================

// // Modern Method: remove()
// const firstNavItem = navList.firstElementChild; // Home
// firstNavItem.remove();
// console.log("Removed first navigation item using remove()");

// // Traditional Method: removeChild()
// const secondNavItem = navList.children[1]; // Example: 'Login' or 'Deals'
// navList.removeChild(secondNavItem);
// console.log("Removed second navigation item using removeChild()");


// // ============================================
// // ⚙️ DOM ATTRIBUTE MANIPULATION
// // ============================================

// const searchBtn = document.getElementById("searchBtn");

// // setAttribute()
// searchBtn.setAttribute("title", "Click to search buses");
// console.log(searchBtn);
// searchBtn.setAttribute("data-type", "primary");

// // getAttribute()

// const searchBtnAttributes = searchBtn.getAttribute("class");
// console.log(searchBtnAttributes);

// // removeAttribute()
// searchBtn.removeAttribute("data-type");
// console.log("Removed custom attribute from Search Button");


// // ============================================
// // 🎨 DOM CLASS MANIPULATION
// // ============================================

// // Select bus list container for demo
// const busList = document.getElementById("busList");

// // --- Using className ---
// console.log("Before Change - className:", busList.className);

// // Overwrite all existing classes (⚠️ replaces all previous classes)
// if (false) {
//   busList.className = "container mx-auto mt-8 border-2 border-dashed border-green-500 p-4 rounded-lg";
// } else {
//   busList.className = "container mx-auto mt-8 border-2 border-dashed border-red-500 p-4 rounded-lg";
// }
// console.log("After Change - className:", busList.className);

// // --- Using classList ---
// const searchSection = document.querySelector("section.bg-white");
// console.log(`List of classes : ${searchSection.classList}`);

// // Add a new class
// searchSection.classList.add("ring-2", "ring-red-400");
// console.log("Added ring class:", searchSection.classList);

// // Remove a class
// searchSection.classList.remove("bg-white");
// console.log("Removed rounded class:", searchSection.classList);

// // Toggle a class (adds if not present, removes if already there)
// searchSection.classList.toggle("bg-gray-200");
// console.log("Toggled gray background:", searchSection.classList);

// searchSection.classList.toggle("bg-gray-200");
// console.log("Toggled gray background:", searchSection.classList);

// searchSection.classList.toggle("bg-gray-200");
// console.log("Toggled gray background:", searchSection.classList);
// // Check if a class exists
// if (searchSection.classList.contains("bg-gray-200")) {
//   console.log("✅ bg-gray-200 class is active");
// } else {
//   console.log("❌ bg-gray-200 class is not active");
// }