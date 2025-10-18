import buses from "./BusData.js";

// DOM Selection :

const fromInput = document.getElementById('fromCity');
const toInput = document.getElementById('toCity');
const searchBtn = document.getElementById('searchBtn');
const busResults = document.getElementById('busResults');
const searchSection = document.getElementById('searchSection');

// DOM manipulation : 

searchBtn.addEventListener("click",
    () => {
        const from = fromInput.value.trim().toLowerCase();
        const to = toInput.value.trim().toLowerCase();

        // clear Previous results :
        busResults.innerHTML = "";

        // Validation for inputs :
        if (!from || !to) {
            alert(`Please enter both from and to address`);
            return;
        }

        // Filter buses matching route :
        const filteredBuses = buses.filter(bus =>
            bus.route.from.toLowerCase() === from && bus.route.to.toLowerCase() === to
        );

        // Check the length of filtered buses :
        if (filteredBuses.length === 0) {
            busResults.innerHTML = `<p class="text-center text-gray-600 mt-10">🚫 No buses found for this route.</p>`
        }

        // Loop through the buses and create dynamic cards.
        filteredBuses.forEach(bus => {

            // create a parent container dynamically
            const busCard = document.createElement("div");
            busCard.className =
                "bg-white p-6 mb-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all w-full";

            // Inner HTML structure (do not modify structure, only styled)
            busCard.innerHTML = `
                <div class="space-y-4">

                    <!-- 1️⃣ Top Row: Bus Info and Fare -->
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-xl font-bold text-blue-700">${bus.operatorName}</h2>
                            <p class="text-gray-600 text-sm mb-1">${bus.busName} • ${bus.busType}</p>
                            <p class="text-gray-700 font-medium">
                                ${new Date(bus.timings.departure).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})} →
                                ${new Date(bus.timings.arrival).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
                                <span class="text-sm text-gray-500 ml-1">(${bus.route.duration})</span>
                            </p>
                        </div>
                        <div class="text-right">
                            <p class="text-green-700 font-semibold mb-1">₹${bus.fare.totalFare}</p>
                            <p class="text-gray-600 text-sm">${bus.availableSeats} / ${bus.totalSeats} seats left</p>
                        </div>
                    </div>

                    <!-- 2️⃣ Amenities -->
                    <div class="flex flex-wrap gap-2">
                        ${bus.amenities.map(a => 
                            `<span class='bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full'>${a}</span>`
                        ).join("")}
                    </div>

                    <!-- 3️⃣ Ratings and Button -->
                    <div class="flex justify-between items-center border-t border-gray-200 pt-3">
                        <div class="flex items-center gap-1 text-yellow-500 font-semibold">
                            ⭐ <span class="text-gray-700">${bus.rating}</span>
                        </div>
                        <button class="viewSeatBtn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition">
                            View Seats
                        </button>
                    </div>

                    <!-- 4️⃣ Seat Layout (Dynamic Section for Later Use) -->
                    <div class="seatLayout hidden bg-gray-50 p-4 rounded-lg mt-2 text-sm text-gray-700">
                        <!-- Seat layout will appear here -->
                    </div>

                </div>
            `;
 
            busResults.appendChild(busCard);

            // DOM Attribute Manipulation :
            
            const seatLayout = busCard.querySelector('.seatLayout');
            const viewSeatBtn = busCard.querySelector('.viewSeatBtn');

            viewSeatBtn.addEventListener('click', () => {
                seatLayout.classList.toggle('hidden'); // toggling visibility
                seatLayout.innerHTML = "";

                //  🚌 Seat layout logic (4 columns — 2 left, aisle gap, 2 right)
                const totalSeats = bus.totalSeats;
                const seatsPerRow = 4; // 2 + path + 2 layout
                const totalRows = Math.ceil(totalSeats / seatsPerRow);

                const seatContainer = document.createElement('div');
                seatContainer.className = "flex flex-col gap-3 items-center";

                for (let row = 0; row < totalRows; row++) {
                    const rowDiv = document.createElement('div');
                    rowDiv.className = "flex justify-center gap-3";

                    for (let col = 0; col < seatsPerRow; col++) {
                        const seatNumber = row * seatsPerRow + col + 1;
                        if (seatNumber > totalSeats) break;

                        // Create path gap after 2 seats
                        if (col === 2) {
                            const path = document.createElement('div');
                            path.className = "w-6"; // aisle space
                            rowDiv.appendChild(path);
                        }

                        // Create seat
                        const seat = document.createElement('div');
                        seat.className =
                            "seat w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md cursor-pointer hover:bg-blue-400 hover:text-white transition";
                        seat.innerText = seatNumber;

                        // Handle seat selection toggle
                        seat.addEventListener('click', () => {
                            seat.classList.toggle('bg-blue-600');
                            seat.classList.toggle('text-white');
                            seat.classList.toggle('scale-105');
                        });

                        rowDiv.appendChild(seat);
                    }

                    seatContainer.appendChild(rowDiv);
                }

                // Optional: Add seat key legend
                const legend = document.createElement('div');
                legend.className = "flex justify-center gap-6 mt-4 text-xs text-gray-600";
                legend.innerHTML = `
                    <div class="flex items-center gap-1">
                        <div class='w-5 h-5 bg-gray-200 rounded'></div> <span>Available</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <div class='w-5 h-5 bg-blue-600 rounded'></div> <span>Selected</span>
                    </div>
                `;

                seatLayout.appendChild(seatContainer);
                seatLayout.appendChild(legend);
            });
        });
    }
);