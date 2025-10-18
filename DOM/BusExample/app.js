import buses from "./BusData.js";

// DOM Selection :

const fromInput = document.getElementById('fromCity');
const toInput = document.getElementById('toCity');
const searchBtn = document.getElementById('searchBtn');
const busResults = document.getElementById('busResults');
const searchSection = document.getElementById('searchSection');

console.log(buses);
// DOM manipulation : 

searchBtn.addEventListener("click",
  () => {
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    console.log(from, to)

    // clearing search
    busResults.innerHTML = "";

    // valiadating search

    if (!from || !to) {
      console.log(`Please enter your From and To address`);
      return;
    }

    // Filter busesroutes
    const filterBuses = buses.filter(
      (bus) =>
        bus.route.from.toLowerCase() === from && bus.route.to.toLowerCase() === to
    );
    console.log(filterBuses);

    // check the length of filtered buses

    if (filterBuses.length === 0) {
      busResults.innerHTML = "<p class='text-xl font-bold text-pink-700'>No buses found</p>"
    }

    // Loop through buses and create a dynamic cards
    filterBuses.forEach(bus => {
      // create a parent container dynamically
      const busCard = document.createElement("div");
      busCard.className = "";

      busCard.innerHTML =
        `
      <div>
        <div>
            <h2>${bus.operatorName}</h2>
            <p>${bus.busType}</P>
            <p>${new Date(bus.timings.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            -- > 
            ${new Date(bus.timings.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</P>
        </div>
        <div>
            <p>${bus.fare.baseFare}</p>
            <p>${bus.totalSeats}</p>   
            <p>${bus.availableSeats}</p>                     
        </div>
        <div>
          <p>${bus.amenities.map(
            a => `<span>${a}</span>`
          )}</p>
        </div>
        <div>
          <div>${bus.rating}</div>
          <button> View Seats </button>
        </div>
      </div>
      `
      busResults.appendChild(busCard);

    })
  }
)

